import { createClient } from '@sanity/client';
import { projectId, dataset, apiVersion, useCdn, token } from './config';

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn,
  apiVersion,
  token, // Optional, for authenticated requests
});

