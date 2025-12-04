# Sanity CMS Setup Guide

This guide will help you set up Sanity Studio to manage your portfolio content through a UI.

## Step 1: Install Sanity Studio Dependencies

The required packages are already installed:
- `sanity` - Sanity Studio framework
- `@sanity/vision` - GROQ query tool
- `@sanity/client` - Sanity client for fetching data
- `@sanity/image-url` - Image URL builder

Note: `next-sanity` requires Next.js 15+, so we're using the standalone studio approach for Next.js 14.

## Step 2: Create a Sanity Project

1. Go to [sanity.io](https://sanity.io) and sign up/login
2. Click "Create new project"
3. Choose a project name (e.g., "Portfolio")
4. Choose a dataset name (default: "production")
5. Copy your **Project ID** from the project settings

## Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

### Getting Your API Token:

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to **API** → **Tokens**
4. Click **Add API token**
5. Choose **Editor** role
6. Copy the token

## Step 4: Initialize Sanity (First Time Only)

Run this command to initialize Sanity in your project:

```bash
npx sanity init --env
```

When prompted:
- Use existing project: **Yes**
- Project ID: Enter your project ID
- Dataset: **production** (or your dataset name)
- Output path: **./sanity** (or keep default)
- Use TypeScript: **Yes**
- Template: **Clean project** (or skip)

## Step 5: Access Sanity Studio

### Standalone Studio (Recommended for Next.js 14)

1. Make sure your `.env` file has the correct environment variables set:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   ```

2. Run the studio:
   ```bash
   npm run studio
   ```
   
   **Note**: If you get a "Configuration must contain `projectId`" error, make sure:
   - Your `.env` file is in the root directory (not `.env.local`)
   - The environment variables are properly set
   - You've restarted the studio after adding/changing env vars

3. Navigate to: `http://localhost:3333`

The studio will open in your browser where you can:
- Create and edit content
- Upload images
- Manage all your portfolio data

### Alternative: Use Sanity Studio Cloud

You can also access your studio at:
- Go to [sanity.io/manage](https://sanity.io/manage)
- Select your project
- Click "Open Studio" to access the web-based studio

## Step 6: Start Managing Content

Once you access the studio:

1. **Profile**: Create a single profile document with:
   - Resume link
   - Cover letter link
   - Skills (array of strings)

2. **Work History**: Add multiple work history entries with:
   - From/To dates
   - Position, type, description
   - Optional location and link

3. **Projects**: Add your projects with:
   - Title, description (array of bullet points)
   - Link, technologies
   - Photos (upload images)

4. **Feedback**: Add testimonials with:
   - Name, company, description

## Content Types Available

- **Profile**: Your personal information and skills
- **Work History**: Your employment timeline
- **Projects**: Portfolio projects
- **Feedback**: Client testimonials

## Troubleshooting

### Studio not loading?
- Check that environment variables are set correctly
- Verify your Project ID is correct
- Make sure you're using the right dataset name

### Can't see content types?
- Ensure `sanity/schema.ts` exports all schemas
- Restart the dev server after schema changes

### Images not uploading?
- Check your Sanity project settings
- Verify API token has proper permissions

## Next Steps

After setting up content in Sanity Studio, your portfolio will automatically fetch and display the content from Sanity CMS instead of the static config file.

