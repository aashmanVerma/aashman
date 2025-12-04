/**
 * Centralized Sanity CMS Configuration
 * 
 * This file exports all Sanity-related configuration values.
 * Make sure to set these environment variables in your .env.local file:
 * 
 * NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
 * NEXT_PUBLIC_SANITY_DATASET=production
 * SANITY_API_TOKEN=your_api_token
 * 
 * Note: For Sanity Studio, use `npm run studio` which loads env vars via dotenv-cli
 */

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'jwpwp3gu',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for better performance and accessibility
  token: process.env.SANITY_API_TOKEN,
} as const;

// Validation helper
export function validateSanityConfig(): void {
  if (!sanityConfig.projectId) {
    throw new Error(
      'NEXT_PUBLIC_SANITY_PROJECT_ID is required. Please set it in your .env file.'
    );
  }
  
  if (!sanityConfig.dataset) {
    throw new Error(
      'NEXT_PUBLIC_SANITY_DATASET is required. Please set it in your .env file.'
    );
  }
}

// Export individual values for convenience
export const {
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
} = sanityConfig;

