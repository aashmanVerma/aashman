import { sanityClient } from '@/lib/sanity/client';
import { SanityProfile } from '@/lib/sanity/schemas';
import { createImageUrlBuilder } from '@sanity/image-url';
import { projectId, dataset } from '@/lib/sanity/config';

const builder = createImageUrlBuilder({
  projectId,
  dataset,
});

export async function getProfile(): Promise<SanityProfile & { profilePictureUrl?: string }> {
  const query = `*[_type == "profile"][0]{
    resume,
    skills,
    calLink,
    email,
    github,
    hashnode,
    twitter,
    profilePicture {
      asset,
      alt
    }
  }`;

  const data = await sanityClient.fetch<SanityProfile>(query);
  
  if (!data) {
    return { 
      resume: '#', 
      skills: [], 
      email: '',
      github: '',
      hashnode: '',
      twitter: ''
    };
  }

  // Build image URL if profile picture exists
  const profilePictureUrl = data.profilePicture?.asset 
    ? builder.image(data.profilePicture.asset).url() 
    : undefined;

  return {
    ...data,
    profilePictureUrl,
  };
}

