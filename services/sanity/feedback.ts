import { sanityClient } from '@/lib/sanity/client';
import { SanityFeedback } from '@/lib/sanity/schemas';

export async function getFeedbacks(): Promise<SanityFeedback[]> {
  const query = `*[_type == "feedback"] | order(_createdAt desc){
    _id,
    name,
    company,
    description
  }`;

  const data = await sanityClient.fetch<SanityFeedback[]>(query);
  return data || [];
}

