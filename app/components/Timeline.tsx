import moment from "moment";
import { getWorkHistory } from "@/services/sanity/works";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default async function Timeline() {
    const data = await getWorkHistory()

    return (
        <div id="work" className="max-w-3xl w-full z-10 px-4 flex flex-col gap-y-3 my-10">
            <div className="flex flex-col gap-y-2 mb-10">
                <p className="text-xl font-medium text-left text-[#1e3a5f]">Timeline ~</p>
                <p className="text-sm text-[#2c4a6b]">My professional journey</p>
            </div>

            <div className="flex flex-col gap-y-6">
                {data.length > 0
                    ? data.map((item: any, idx: number) => {
                        const fromDate = moment(item.from, 'YYYY-MM-DD').format('MMMM, YYYY');
                        const toDate = item.to ? moment(item.to, 'YYYY-MM-DD').format('MMMM, YYYY') : 'Present';
                        const duration = `${fromDate} - ${toDate}`;

                        return (
                            <Card key={idx} className="bg-[#1e3a5f]/10 backdrop-blur-sm hover:border-[#1e3a5f]/30 transition-colors duration-300 shadow-sm">
                                <CardContent className="p-6">
                                    <div className="flex flex-col gap-y-4">
                                        <div className="flex flex-row items-start justify-between gap-4">
                                            <div className="flex items-start gap-3 flex-1">
                                                <div className="flex-shrink-0 mt-1">
                                                    {item.companyLogoUrl ? (
                                                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                                                            <Image
                                                                src={item.companyLogoUrl}
                                                                alt={item.position || "Company logo"}
                                                                width={48}
                                                                height={48}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="w-12 h-12 rounded-lg bg-[#1e3a5f]/20 backdrop-blur-sm flex items-center justify-center">
                                                            <svg className="w-6 h-6 text-[#1e3a5f]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-col gap-y-1 flex-1">
                                                    <p className="text-lg font-medium text-[#1e3a5f]">
                                                        {item.position}
                                                    </p>
                                                    <div className="flex flex-wrap items-center gap-1.5">
                                                        <Badge className="bg-gray-100 border border-gray-300 text-[#1e3a5f] hover:bg-gray-200 hover:border-gray-400 transition-all duration-200 shadow-sm text-xs font-normal px-2 py-0.5">
                                                            {item.type}
                                                        </Badge>
                                                        {item.location && (
                                                            <Badge className="bg-gray-100 border border-gray-300 text-[#1e3a5f] hover:bg-gray-200 hover:border-gray-400 transition-all duration-200 shadow-sm text-xs font-normal px-2 py-0.5">
                                                                {item.location}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-sm mt-1 font-medium underline text-[#1e3a5f] hover:text-[#2c4a6b] transition-colors flex-shrink-0"
                                                >
                                                    View
                                                </a>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <p className="text-sm font-medium text-[#2c4a6b]">{duration}</p>
                                            <p className="text-sm font-normal text-[#2c4a6b] leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })
                    : <p className="text-[#2c4a6b]">No work history available</p>}
            </div>
        </div>
    )
}
