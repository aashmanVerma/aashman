import { sanityClient } from '@/lib/sanity/client';
import { SanityProject } from '@/lib/sanity/schemas';
import { createImageUrlBuilder } from '@sanity/image-url';
import { projectId, dataset } from '@/lib/sanity/config';

const builder = createImageUrlBuilder({
  projectId,
  dataset,
});

function urlFor(source: any) {
  return builder.image(source);
}

export async function getProjects(): Promise<Array<{
  title: string;
  description: string | string[];
  link?: string;
  technologies: string[];
  photos: string[];
}>> {
  const query = `*[_type == "project"] | order(_createdAt desc){
    _id,
    title,
    description,
    link,
    technologies,
    photos
  }`;

  const data = await sanityClient.fetch<SanityProject[]>(query);
  
  return data.map(project => ({
    title: project.title,
    description: project.description,
    link: project.link,
    technologies: project.technologies || [],
    photos: project.photos?.map((photo: any) => {
      if (photo.asset) {
        return urlFor(photo.asset).url() || '';
      }
      return photo;
    }).filter(Boolean) || []
  })) || [];
}

