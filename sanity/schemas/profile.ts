const profile = {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'resume',
      title: 'Resume Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'calLink',
      title: 'Cal.com Link (Book Meeting)',
      type: 'url',
      description: 'Your Cal.com booking link',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'github',
      title: 'GitHub Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'hashnode',
      title: 'Hashnode Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'twitter',
      title: 'Twitter/X Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Description of the profile picture',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

export default profile;

