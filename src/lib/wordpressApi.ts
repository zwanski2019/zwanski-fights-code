
/**
 * WordPress API integration service
 * 
 * This service provides methods to interact with a WordPress site via the WordPress REST API.
 * It handles authentication, content creation, and publishing.
 */

interface WordPressCredentials {
  siteUrl: string;
  username: string;
  appPassword: string;
}

interface WordPressPost {
  title: string;
  content: string;
  status?: 'draft' | 'publish' | 'private' | 'pending';
  categories?: number[];
  tags?: number[];
  featured_media?: number;
}

// Store credentials for reuse within the session
let credentials: WordPressCredentials | null = null;

/**
 * Set the WordPress credentials for API calls
 */
export const setWordPressCredentials = (creds: WordPressCredentials): void => {
  credentials = creds;
};

/**
 * Check if credentials are set and valid
 */
export const validateCredentials = async (): Promise<boolean> => {
  if (!credentials) return false;
  
  try {
    // Attempt to fetch user info to validate credentials
    const response = await fetch(`${credentials.siteUrl}/wp-json/wp/v2/users/me`, {
      headers: {
        'Authorization': 'Basic ' + btoa(`${credentials.username}:${credentials.appPassword}`),
      },
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error validating WordPress credentials:', error);
    return false;
  }
};

/**
 * Create and publish a post to WordPress
 */
export const createPost = async (post: WordPressPost): Promise<number | null> => {
  if (!credentials) {
    throw new Error('WordPress credentials not set');
  }
  
  try {
    const response = await fetch(`${credentials.siteUrl}/wp-json/wp/v2/posts`, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${credentials.username}:${credentials.appPassword}`),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: post.title,
        content: post.content,
        status: post.status || 'draft',
        categories: post.categories,
        tags: post.tags,
        featured_media: post.featured_media,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`WordPress API error: ${errorData.message || 'Unknown error'}`);
    }
    
    const data = await response.json();
    return data.id;
  } catch (error) {
    console.error('Error creating WordPress post:', error);
    throw error;
  }
};

/**
 * Fetch available categories from WordPress
 */
export const getCategories = async (): Promise<Array<{id: number, name: string}>> => {
  if (!credentials) {
    throw new Error('WordPress credentials not set');
  }
  
  try {
    const response = await fetch(`${credentials.siteUrl}/wp-json/wp/v2/categories`, {
      headers: {
        'Authorization': 'Basic ' + btoa(`${credentials.username}:${credentials.appPassword}`),
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch WordPress categories');
    }
    
    const categories = await response.json();
    return categories.map((category: any) => ({
      id: category.id,
      name: category.name,
    }));
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    return [];
  }
};

/**
 * Schedule a post for future publication
 */
export const schedulePost = async (
  post: WordPressPost, 
  publishDate: Date
): Promise<number | null> => {
  if (!credentials) {
    throw new Error('WordPress credentials not set');
  }
  
  try {
    const response = await fetch(`${credentials.siteUrl}/wp-json/wp/v2/posts`, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${credentials.username}:${credentials.appPassword}`),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...post,
        status: 'future',
        date: publishDate.toISOString(),
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`WordPress API error: ${errorData.message || 'Unknown error'}`);
    }
    
    const data = await response.json();
    return data.id;
  } catch (error) {
    console.error('Error scheduling WordPress post:', error);
    throw error;
  }
};
