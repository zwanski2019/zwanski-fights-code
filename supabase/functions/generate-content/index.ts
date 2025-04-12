
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.3.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, aiService, options } = await req.json();

    if (!prompt) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameter: prompt' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // In a real implementation, you would retrieve the API key for the specified service
    // and make API calls to the appropriate AI service
    
    // For demonstration, we'll generate sample content
    console.log(`Generating content with service: ${aiService || 'default'}`);
    console.log(`Prompt: ${prompt}`);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const generatedTitle = `The Complete Guide to ${prompt.split(' ').slice(0, 3).join(' ')}`;
    
    const generatedContent = `
# ${generatedTitle}

## Introduction
${prompt} is an increasingly important topic in today's digital landscape. As businesses and content creators seek to establish their online presence, understanding the fundamentals of this subject becomes crucial for success.

## Key Concepts
When exploring ${prompt.split(' ').slice(0, 3).join(' ')}, several important concepts emerge:

1. **Strategic Planning** - Developing a coherent approach to your content strategy
2. **Audience Engagement** - Creating material that resonates with your specific target audience
3. **Technical Optimization** - Ensuring your content performs well across different platforms
4. **Analytics and Refinement** - Using data to continuously improve your approach

## Best Practices
Industry leaders recommend the following practices:

- Maintain a consistent publishing schedule
- Focus on quality over quantity
- Incorporate multimedia elements when appropriate
- Optimize for both search engines and reader experience

## Future Trends
Looking ahead, we can anticipate several developments in this space:

- Increased personalization through AI
- Greater emphasis on interactive content
- Evolution of content distribution channels
- More sophisticated analytics and performance metrics

## Conclusion
By implementing the strategies outlined in this guide, you'll be well-positioned to leverage ${prompt} effectively in your overall digital strategy.
`;

    const suggestedTags = prompt.split(' ')
      .filter(word => word.length > 3)
      .map(word => word.toLowerCase())
      .slice(0, 5);
    
    return new Response(
      JSON.stringify({
        title: generatedTitle,
        content: generatedContent,
        suggestedTags,
        metadata: {
          aiService: aiService || 'default',
          generationTime: new Date().toISOString(),
          options: options || {}
        }
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in generate-content function:', error);
    
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
