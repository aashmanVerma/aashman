import { sanityClient } from '@/lib/sanity/client';
import { SanityWorkHistory } from '@/lib/sanity/schemas';
import { createImageUrlBuilder } from '@sanity/image-url';
import { projectId, dataset } from '@/lib/sanity/config';

const builder = createImageUrlBuilder({
  projectId,
  dataset,
});

function urlFor(source: any) {
  return builder.image(source);
}

export async function getWorkHistory(): Promise<Array<SanityWorkHistory & { companyLogoUrl?: string }>> {
  const query = `*[_type == "workHistory"] | order(_createdAt desc){
    _id,
    from,
    to,
    position,
    type,
    description,
    location,
    link,
    companyLogo{
      asset->{
        _id,
        url
      },
      alt
    }
  }`;

  const data = await sanityClient.fetch<Array<SanityWorkHistory & { companyLogo?: any }>>(query);
  
  return data.map(item => ({
    ...item,
    companyLogoUrl: item.companyLogo?.asset?.url 
      ? urlFor(item.companyLogo.asset).url() 
      : undefined
  })) || [];
}

