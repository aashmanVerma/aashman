import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';
import { ConstructionIcon, ExternalLink, Pickaxe, PickaxeIcon } from 'lucide-react';
import React from 'react'

export default function Projects() {
  return (
    <div className="px-4 flex flex-col gap-y-8 w-full max-w-3xl my-10 relative z-20" id="project">
      <div className='flex flex-col gap-y-2'>
        <div className='flex gap-x-2'>
          <p className="text-xl font-medium text-left relative z-20">Projects ~</p>
        </div>
        <p className="text-sm text-gray-600">Projects from which I started my journey</p>
        <Badge variant="destructive" className='w-40'>Under Construction</Badge>
      </div>

      <div className='flex flex-col gap-y-4'>
        <Card className='w-full'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <strong className='text-black'>DoodleDraw</strong>

              <a href="https://doodledraw.vercel.app/" target='_blank'>
                <ExternalLink className='w-4' />
              </a>
            </div>
            <p>It allows users to sketch ideas freely in a hand-drawn style right in their browser.</p>
            <div className='flex gap-2'>
              {
                ["NextJS", "Clerk", "Excalidraw", "ShadCn", "TailwindCSS", "Supabase"].map((el, i) => <Badge key={i}>{el}</Badge>)
              }
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
