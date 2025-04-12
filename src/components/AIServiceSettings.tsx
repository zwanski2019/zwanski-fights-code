
import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Json } from '@/integrations/supabase/types';

interface AIService {
  id: string;
  service_name: string;
  api_key: string | null;
  is_enabled: boolean;
  settings: Json | null;
  created_at: string;
  updated_at: string;
  user_id: string;
}

const aiServiceOptions = [
  { id: 'openai', name: 'OpenAI', description: 'GPT-4 and other models for text generation' },
  { id: 'claude', name: 'Anthropic Claude', description: 'Claude models for text and analysis' },
  { id: 'deepseek', name: 'DeepSeek AI', description: 'Advanced language models for content creation' },
  { id: 'ollama', name: 'Ollama', description: 'Run large language models locally and integrate via API' },
  { id: 'gemini', name: 'Google Gemini', description: 'Google\'s multimodal AI for diverse content generation' },
];

const AIServiceSettings: React.FC = () => {
  const [aiServices, setAiServices] = useState<AIService[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchAIServices();
    }
  }, [user]);

  const fetchAIServices = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('ai_services')
        .select('*')
        .order('service_name');
      
      if (error) throw error;
      
      // Initialize any missing services from our options
      const existingServiceIds = new Set(data?.map(s => s.service_name) || []);
      const servicesData = [...(data || [])];
      
      for (const option of aiServiceOptions) {
        if (!existingServiceIds.has(option.id) && user) {
          // Create a placeholder service with all required fields
          servicesData.push({
            id: 'new', // Temp ID, will be replaced on save
            service_name: option.id,
            api_key: null,
            is_enabled: false,
            settings: {},
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            user_id: user.id
          });
        }
      }
      
      setAiServices(servicesData);
    } catch (error: any) {
      toast({
        title: 'Error fetching AI services',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApiKeyChange = (serviceId: string, apiKey: string) => {
    setAiServices(prevServices => 
      prevServices.map(service => 
        service.service_name === serviceId ? { ...service, api_key: apiKey } : service
      )
    );
  };

  const handleToggleService = (serviceId: string, enabled: boolean) => {
    setAiServices(prevServices => 
      prevServices.map(service => 
        service.service_name === serviceId ? { ...service, is_enabled: enabled } : service
      )
    );
  };

  const saveService = async (service: AIService) => {
    try {
      let result;
      
      if (service.id === 'new') {
        // Insert new service
        const { data, error } = await supabase
          .from('ai_services')
          .insert({
            service_name: service.service_name,
            api_key: service.api_key,
            is_enabled: service.is_enabled,
            settings: service.settings,
            user_id: user?.id
          })
          .select()
          .single();
        
        if (error) throw error;
        result = data;
      } else {
        // Update existing service
        const { data, error } = await supabase
          .from('ai_services')
          .update({
            api_key: service.api_key,
            is_enabled: service.is_enabled,
            settings: service.settings,
          })
          .eq('id', service.id)
          .select()
          .single();
        
        if (error) throw error;
        result = data;
      }
      
      // Update the service in state with the actual ID from db
      setAiServices(prevServices => 
        prevServices.map(s => 
          s.service_name === service.service_name ? { ...result } : s
        )
      );
      
      toast({
        title: 'Service updated',
        description: `${getServiceDisplayName(service.service_name)} settings have been saved.`,
      });
    } catch (error: any) {
      toast({
        title: 'Error saving service',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const getServiceDisplayName = (serviceId: string): string => {
    const service = aiServiceOptions.find(option => option.id === serviceId);
    return service ? service.name : serviceId;
  };

  const getServiceDescription = (serviceId: string): string => {
    const service = aiServiceOptions.find(option => option.id === serviceId);
    return service ? service.description : '';
  };

  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">AI Service Integration</h2>
      <p className="text-muted-foreground">
        Connect to various AI services to power your content generation. Add API keys for the services you want to use.
      </p>
      
      <Accordion type="single" collapsible className="w-full">
        {aiServiceOptions.map(option => {
          const service = aiServices.find(s => s.service_name === option.id);
          if (!service) return null;
          
          return (
            <AccordionItem key={option.id} value={option.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between w-full pr-4">
                  <span>{option.name}</span>
                  <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                    <Switch 
                      checked={service.is_enabled}
                      onCheckedChange={(checked) => handleToggleService(option.id, checked)}
                    />
                    <span className="text-sm text-muted-foreground">
                      {service.is_enabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardHeader>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`api-key-${option.id}`}>API Key</Label>
                      <Input 
                        id={`api-key-${option.id}`}
                        type="password"
                        placeholder="Enter API key"
                        value={service.api_key || ''}
                        onChange={(e) => handleApiKeyChange(option.id, e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground">
                        Your API key is stored securely and never shared.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={() => saveService(service)}
                      disabled={!service.api_key && service.is_enabled}
                    >
                      Save {option.name} Settings
                    </Button>
                  </CardFooter>
                </Card>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AIServiceSettings;
