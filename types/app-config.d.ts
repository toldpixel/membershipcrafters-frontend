import 'nuxt'
declare module 'nuxt/schema' {
    interface AppConfig {
      // This will entirely replace the existing inferred `theme` property
      nuxtIcon: {
        size?: string;
        class?: string;
        aliases?: Record<string, string>;
        iconifyApiOptions?: {
          url?: string;
          publicApiFallback?: boolean;
        };
      };
    }
  }
  
  // It is always important to ensure you import/export something when augmenting a type
  export {}