import { TracingBeam } from '../ui/tracing-beam'

const progress = [
    {
        duration: 'June 2023 - July 2024',
        title: 'Frontend Developer',
        description: 'Kickstarted my journey as a frontend developer. I was responsible for the UI development and design of the web application along with the implementation of tracking features.',
        company: 'Adgenix Media',
        location: 'US',
        type: 'Freelance Based',
        link: 'https://www.linkedin.com/company/adgenix-media/'
    },
    {
        duration: 'July 2023 - Present',
        title: 'Full Stack Developer',
        description: 'Major boost in my career as a full stack developer. I was responsible for the development of the web application from scratch, including the backend and frontend. Setting up microservices, databases, and APIs.',
        company: 'Propbar',
        location: 'UK',
        type: 'Contract Based',
        link: 'https://www.linkedin.com/company/propbar'
    },
    {
        duration: 'December 2023 - Present',
        title: 'Fullstack Developer',
        description: "Development of new Trip planner, building trip planner constraints. Setting up development pipelines and deployment strategies.",
        company: 'Explrar',
        location: 'Singapore',
        type: 'Freelance Based',
        link: 'https://twitter.com/explrar'
    },
    {
        duration: 'June 2024 - Present',
        title: 'Fullstack Developer',
        description: 'NFT Marketplace development, major refractoring of existing code, admin dashboard development, and setting up CI/CD pipelines.',
        company: 'VaultX',
        location: 'Japan',
        type: 'Freelance Based',
        link: 'https://x.com/MonsterX_RWA'
    }
]

const TimelineProgress = ({ items }: { items: Array<any> }) => {
    return (
        <div className='flex flex-col gap-y-12 ml-10 md:ml-0'>
            {items.length > 0 ? items.map((item: any, idx: any) => (
                <div className='flex flex-col gap-y-3 max-w-2xl' key={idx}>
                    <div className='flex flex-row items-center justify-between'>
                        <p className='text-lg font-medium'>{item.duration}</p>
                        <a href={item.link} target='_blank' rel='noreferrer' className='text-sm font-medium underline'>View</a>
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <p className='text-lg font-medium'>{item.title}
                            <br />
                            <span className='px-2 py-1 rounded-md bg-[#222831] text-white text-xs text'>{item.type}</span>
                        </p>
                        <p className='text-sm font-normal mt-4'>{item.description}</p>
                        <div>
                            <p className='text-sm inline font-normal bg-gray-300 px-2 py-1 rounded'>{item.company}, {item.location}</p>
                        </div>
                    </div>
                </div>
            )) : null}
        </div>
    )
}

export default function Timeline() {
    return (
        <div className="max-w-3xl w-full z-10 px-4 flex flex-col gap-y-3 my-10">
            <p className="text-xl font-medium text-left mb-10">Timeline ~</p>

            <TracingBeam children={
                <TimelineProgress items={progress} />
            }
            className='md:ml-12 mb-20'
            />
        </div>
    )
}
