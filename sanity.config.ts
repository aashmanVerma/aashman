import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schema';
import { projectId, dataset, validateSanityConfig } from './lib/sanity/config';

// Validate config before creating Sanity config
try {
  validateSanityConfig();
} catch (error) {
  console.error('❌ Sanity configuration error:', error);
  console.error('💡 Make sure your .env file contains NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET');
  console.error('💡 For Sanity Studio, export the variables before running:');
  console.error('   export NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id');
  console.error('   export NEXT_PUBLIC_SANITY_DATASET=production');
}

const config = defineConfig({
  name: 'portfolio',
  title: 'Portfolio CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});

export default config;

