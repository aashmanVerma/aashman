# Sanity CORS Configuration Guide

## The Issue
When accessing your website from the same network, you're getting a runtime error trying to reach Sanity's API. This is typically a CORS (Cross-Origin Resource Sharing) configuration issue.

## Solution: Configure CORS in Sanity

### Step 1: Go to Sanity Manage
1. Visit https://www.sanity.io/manage
2. Log in to your account
3. Select your project (project ID: `jwpwp3gu`)

### Step 2: Configure CORS Settings
1. Go to **API** → **CORS origins** in the left sidebar
2. Click **Add CORS origin**
3. Add the following origins (one at a time):
   - `http://localhost:3000` (for local development)
   - `http://localhost:3001` (if you use a different port)
   - `http://[YOUR_LOCAL_IP]:3000` (for network access, e.g., `http://192.168.1.100:3000`)
   - Your production domain (e.g., `https://yourdomain.com`)

4. For each origin, make sure:
   - ✅ **Allow credentials** is checked (if using tokens)
   - ✅ **Allow extensions** is checked

### Step 3: Verify Dataset Access
1. Go to **API** → **Datasets** in Sanity Manage
2. Make sure your `production` dataset is set to **Public** (not private)
3. If it's private, you'll need to use an API token with read permissions

### Step 4: Check API Token Permissions
1. Go to **API** → **Tokens** in Sanity Manage
2. Verify your token has **Viewer** or **Editor** permissions
3. The token should have access to the `production` dataset

## Alternative: Use Public Dataset (No Token Required)

If you want to make your content publicly accessible without authentication:

1. In Sanity Manage, go to **API** → **Datasets**
2. Set your dataset to **Public**
3. Update your client configuration to not require a token for read operations

## Quick Fix: Update Client Configuration

For development, you can also try using the CDN which is more accessible:

The config has been updated to use `useCdn: true` which should help with accessibility.

## Testing

After configuring CORS:
1. Restart your Next.js dev server
2. Try accessing from your local network
3. Check browser console for any remaining CORS errors

## Common Issues

- **Still getting CORS errors**: Make sure you added the exact origin (including protocol http/https and port)
- **Token errors**: Verify your API token has the correct permissions
- **Network issues**: Try accessing from `localhost` first to rule out network problems

