
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WordPressManager: React.FC = () => {
  const { toast } = useToast();
  const [wordpressUrl, setWordpressUrl] = useState('');
  const [username, setUsername] = useState('');
  const [appPassword, setAppPassword] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [topicPrompt, setTopicPrompt] = useState('Latest advancements in artificial intelligence');
  const [selectedCategory, setSelectedCategory] = useState('ai-news');
  const [autoPostSchedule, setAutoPostSchedule] = useState('never');

  const handleConnect = async () => {
    if (!wordpressUrl || !username || !appPassword) {
      toast({
        title: "Missing credentials",
        description: "Please fill in all WordPress connection details",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // In a real implementation, we would validate the credentials here
      // For now, we'll simulate a successful connection
      setTimeout(() => {
        setIsConnected(true);
        toast({
          title: "Connected successfully",
          description: "Your WordPress site is now connected",
        });
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      toast({
        title: "Connection failed",
        description: "Could not connect to WordPress site",
        variant: "destructive",
      });
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

    setIsLoading(true);
    
    try {
      // In a real implementation, we would call an AI service here
      // For now, we'll simulate content generation
      setTimeout(() => {
        const sampleTitle = `The Future of ${topicPrompt.split(' ').slice(-2).join(' ')}`;
        setPostTitle(sampleTitle);
        
        const sampleContent = `
# ${sampleTitle}

## Introduction
The landscape of artificial intelligence continues to evolve at an unprecedented pace. With new frameworks, models, and applications emerging almost daily, it's crucial to stay informed about the latest developments.

## Recent Developments
In recent months, we've seen significant advancements in large language models, computer vision, and reinforcement learning. These technologies are not just academic curiosities but are being deployed in real-world applications across various industries.

## Impact on Industries
From healthcare to finance, transportation to entertainment, AI is transforming how businesses operate and deliver value to customers. Organizations that embrace these technologies gain competitive advantages through increased efficiency, novel insights, and innovative products and services.

## Looking Ahead
As we look to the future, we anticipate even more groundbreaking developments in AI. The convergence of different AI technologies, along with advances in computational power and data availability, will unlock new possibilities we can barely imagine today.

## Conclusion
The journey of AI is just beginning, and the pace of innovation shows no signs of slowing down. By staying informed and adaptable, organizations and individuals can harness the power of AI to create a better future.
        `;
        
        setGeneratedContent(sampleContent);
        toast({
          title: "Content generated",
          description: "Your AI-generated content is ready for review",
        });
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "Could not generate content",
        variant: "destructive",
      });
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
      // In a real implementation, we would post to WordPress REST API here
      // For now, we'll simulate a successful post
      setTimeout(() => {
        toast({
          title: "Post published",
          description: `"${postTitle}" has been published to your WordPress site`,
        });
        setIsLoading(false);
        // Reset form after successful post
        setGeneratedContent('');
        setPostTitle('');
      }, 1500);
    } catch (error) {
      toast({
        title: "Publishing failed",
        description: "Could not publish to WordPress site",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-4xl py-10">
      <h1 className="text-3xl font-bold mb-6">WordPress AI Content Manager</h1>
      
      <Tabs defaultValue="connect">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="connect">Connect</TabsTrigger>
          <TabsTrigger value="generate" disabled={!isConnected}>Generate</TabsTrigger>
          <TabsTrigger value="schedule" disabled={!isConnected}>Schedule</TabsTrigger>
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
                disabled={isLoading || !topicPrompt}
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
        
        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Auto-Posting Schedule</CardTitle>
              <CardDescription>
                Set up a schedule for automatic content generation and posting
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="schedule">Post Frequency</Label>
                <Select value={autoPostSchedule} onValueChange={setAutoPostSchedule}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never (Manual Only)</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="topics">Topic Rotation</Label>
                <Textarea 
                  id="topics" 
                  placeholder="Enter topics to rotate through, one per line..."
                  className="min-h-[100px]"
                  disabled={autoPostSchedule === 'never'}
                />
                <p className="text-sm text-muted-foreground">
                  The system will rotate through these topics when automatically generating content
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={autoPostSchedule === 'never' || isLoading}>
                {isLoading ? "Saving..." : "Save Schedule"}
              </Button>
              <p className="ml-4 text-sm text-muted-foreground">
                Note: Auto-posting requires your connection to remain active
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WordPressManager;
