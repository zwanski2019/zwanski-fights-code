
import React, { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";
import AIServiceSettings from "@/components/AIServiceSettings";
import NewsletterManager from "@/components/NewsletterManager";

interface WordPressCredentials {
  id: string;
  site_url: string;
  username: string;
  app_password: string;
}

interface AIService {
  id: string;
  service_name: string;
  is_enabled: boolean;
}

const WordPressManager: React.FC = () => {
  const { toast } = useToast();
  const { user, signOut } = useAuth();
  const [wordpressUrl, setWordpressUrl] = useState('');
  const [username, setUsername] = useState('');
  const [appPassword, setAppPassword] = useState('');
  const [credentials, setCredentials] = useState<WordPressCredentials | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [generatedContent, setGeneratedContent] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [topicPrompt, setTopicPrompt] = useState('Latest advancements in artificial intelligence');
  const [selectedCategory, setSelectedCategory] = useState('ai-news');
  const [autoPostSchedule, setAutoPostSchedule] = useState('never');
  const [activeAiServices, setActiveAiServices] = useState<AIService[]>([]);
  const [selectedAiService, setSelectedAiService] = useState('');

  useEffect(() => {
    if (user) {
      fetchWordPressCredentials();
      fetchActiveAiServices();
    }
  }, [user]);

  const fetchWordPressCredentials = async () => {
    try {
      const { data, error } = await supabase
        .from('wordpress_credentials')
        .select('*')
        .limit(1)
        .maybeSingle();
      
      if (error) throw error;
      
      if (data) {
        setCredentials(data);
        setWordpressUrl(data.site_url);
        setUsername(data.username);
        setAppPassword('••••••••••••');
        setIsConnected(true);
      }
    } catch (error: any) {
      console.error('Error fetching WordPress credentials:', error);
    } finally {
      setIsFetching(false);
    }
  };

  const fetchActiveAiServices = async () => {
    try {
      const { data, error } = await supabase
        .from('ai_services')
        .select('id, service_name, is_enabled')
        .eq('is_enabled', true);
      
      if (error) throw error;
      
      setActiveAiServices(data || []);
      if (data && data.length > 0) {
        setSelectedAiService(data[0].service_name);
      }
    } catch (error: any) {
      console.error('Error fetching AI services:', error);
    }
  };

  const handleConnect = async () => {
    if (!wordpressUrl || !username || !appPassword) {
      toast({
        title: "Missing credentials",
        description: "Please fill in all WordPress connection details",
        variant: "destructive",
      });
      return;
    }

    if (appPassword === '••••••••••••' && credentials) {
      toast({
        title: "Already connected",
        description: "Your WordPress site is already connected",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Store credentials in Supabase
      if (credentials) {
        const { error } = await supabase
          .from('wordpress_credentials')
          .update({
            site_url: wordpressUrl,
            username: username,
            app_password: appPassword,
          })
          .eq('id', credentials.id);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('wordpress_credentials')
          .insert({
            site_url: wordpressUrl,
            username: username,
            app_password: appPassword,
            user_id: user?.id,
          });
        
        if (error) throw error;
      }
      
      setIsConnected(true);
      toast({
        title: "Connected successfully",
        description: "Your WordPress site is now connected",
      });
    } catch (error: any) {
      toast({
        title: "Connection failed",
        description: error.message || "Could not connect to WordPress site",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateContent = async () => {
    if (!topicPrompt) {
      toast({
        title: "Missing topic",
        description: "Please provide a topic for content generation",
        variant: "destructive",
      });
      return;
    }

    if (activeAiServices.length === 0) {
      toast({
        title: "No AI services enabled",
        description: "Please enable at least one AI service in the Settings tab",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke("generate-content", {
        body: {
          prompt: topicPrompt,
          aiService: selectedAiService,
          options: {
            category: selectedCategory,
          }
        },
      });
      
      if (error) throw error;
      
      setPostTitle(data.title);
      setGeneratedContent(data.content);
      
      // Log the content generation to Supabase
      await supabase
        .from('content_generations')
        .insert({
          user_id: user?.id,
          ai_service_id: activeAiServices.find(s => s.service_name === selectedAiService)?.id,
          prompt: topicPrompt,
          title: data.title,
          content: data.content,
          status: 'generated',
          metadata: {
            category: selectedCategory,
            tags: data.suggestedTags,
          }
        });
      
      toast({
        title: "Content generated",
        description: "Your AI-generated content is ready for review",
      });
    } catch (error: any) {
      console.error('Generation error:', error);
      toast({
        title: "Generation failed",
        description: error.message || "Could not generate content",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePublishPost = async () => {
    if (!isConnected) {
      toast({
        title: "Not connected",
        description: "Please connect to your WordPress site first",
        variant: "destructive",
      });
      return;
    }

    if (!postTitle || !generatedContent) {
      toast({
        title: "Missing content",
        description: "Please generate content before publishing",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // In a real implementation, this would be a call to an edge function 
      // that uses the WordPress REST API
      setTimeout(async () => {
        // Log the publication to Supabase
        await supabase
          .from('content_generations')
          .insert({
            user_id: user?.id,
            ai_service_id: activeAiServices.find(s => s.service_name === selectedAiService)?.id,
            prompt: topicPrompt,
            title: postTitle,
            content: generatedContent,
            status: 'published',
            wordpress_post_id: Math.floor(Math.random() * 10000), // Simulated post ID
            metadata: {
              category: selectedCategory,
              publishedAt: new Date().toISOString(),
            }
          });
          
        toast({
          title: "Post published",
          description: `"${postTitle}" has been published to your WordPress site`,
        });
        
        // Reset form after successful post
        setGeneratedContent('');
        setPostTitle('');
        setIsLoading(false);
      }, 1500);
    } catch (error: any) {
      toast({
        title: "Publishing failed",
        description: error.message || "Could not publish to WordPress site",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
  };

  if (isFetching) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container max-w-5xl py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">WordPress AI Content Manager</h1>
        <Button variant="ghost" size="icon" onClick={handleLogout}>
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
      
      <Tabs defaultValue="connect">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="connect">Connect</TabsTrigger>
          <TabsTrigger value="generate" disabled={!isConnected}>Generate</TabsTrigger>
          <TabsTrigger value="newsletter" disabled={!isConnected}>Newsletter</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="connect">
          <Card>
            <CardHeader>
              <CardTitle>WordPress Connection</CardTitle>
              <CardDescription>
                Connect to your WordPress site to enable AI content generation and publishing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="wordpress-url">WordPress Site URL</Label>
                <Input 
                  id="wordpress-url" 
                  placeholder="https://yourblog.com" 
                  value={wordpressUrl}
                  onChange={(e) => setWordpressUrl(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  placeholder="admin" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="app-password">Application Password</Label>
                <Input 
                  id="app-password" 
                  type="password" 
                  placeholder="xxxx xxxx xxxx xxxx" 
                  value={appPassword}
                  onChange={(e) => setAppPassword(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  You can create an application password in your WordPress dashboard under Users → Profile → Application Passwords
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleConnect} disabled={isLoading}>
                {isLoading ? "Connecting..." : isConnected ? "Reconnect" : "Connect to WordPress"}
              </Button>
              {isConnected && (
                <span className="ml-2 text-sm text-green-500">✓ Connected</span>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="generate">
          <Card>
            <CardHeader>
              <CardTitle>Generate AI Content</CardTitle>
              <CardDescription>
                Create and publish AI-generated content about the latest AI developments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ai-service">AI Service</Label>
                <Select value={selectedAiService} onValueChange={setSelectedAiService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select AI service" />
                  </SelectTrigger>
                  <SelectContent>
                    {activeAiServices.length === 0 ? (
                      <SelectItem value="none" disabled>No active AI services</SelectItem>
                    ) : (
                      activeAiServices.map(service => (
                        <SelectItem key={service.id} value={service.service_name}>
                          {service.service_name.charAt(0).toUpperCase() + service.service_name.slice(1)}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="topic">Topic or Prompt</Label>
                <Textarea 
                  id="topic" 
                  placeholder="Write about the latest advancements in AI..." 
                  value={topicPrompt}
                  onChange={(e) => setTopicPrompt(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-news">AI News</SelectItem>
                    <SelectItem value="machine-learning">Machine Learning</SelectItem>
                    <SelectItem value="deep-learning">Deep Learning</SelectItem>
                    <SelectItem value="nlp">Natural Language Processing</SelectItem>
                    <SelectItem value="computer-vision">Computer Vision</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                onClick={handleGenerateContent} 
                disabled={isLoading || !topicPrompt || activeAiServices.length === 0}
                className="mt-4"
              >
                {isLoading ? "Generating..." : "Generate Content"}
              </Button>
              
              {generatedContent && (
                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="post-title">Post Title</Label>
                    <Input 
                      id="post-title" 
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="generated-content">Generated Content</Label>
                    <Textarea 
                      id="generated-content" 
                      value={generatedContent}
                      onChange={(e) => setGeneratedContent(e.target.value)}
                      className="min-h-[300px] font-mono text-sm"
                    />
                  </div>
                  
                  <Button 
                    onClick={handlePublishPost} 
                    disabled={isLoading || !generatedContent}
                    className="w-full"
                  >
                    {isLoading ? "Publishing..." : "Publish to WordPress"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="newsletter">
          <NewsletterManager />
        </TabsContent>
        
        <TabsContent value="settings">
          <AIServiceSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WordPressManager;
