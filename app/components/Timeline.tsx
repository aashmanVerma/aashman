import { TracingBeam } from "../ui/tracing-beam";
import { getWorkHistory } from "@/services/strapi/works";
import moment from "moment";

const TimelineContent = async () => {
  const data = await getWorkHistory();
  
  return (
    <TracingBeam className="md:mx-12 mb-20 ">
      {data && <TimelineProgress items={data as any} />}
    </TracingBeam>
  );
};

const TimelineProgress = ({ items }: { items: Array<any> }) => {
  return (
    <div className="flex flex-col gap-y-12 ml-10 md:ml-0">
      {items.length > 0
        ? items.map((item: any, idx: any) => {
            const fromDate = moment(item.from, 'YYYY-MM-DD').format('MMMM, YYYY');
            const toDate = item.to ? moment(item.to, 'YYYY-MM-DD').format('MMMM, YYYY') : 'Present';
            const duration = `${fromDate} - ${toDate}`;

            return (
              <div className="flex flex-col gap-y-3" key={idx}>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-lg font-medium">{duration}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium underline"
                    >
                      View
                    </a>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-lg font-medium">
                    {item.position}
                    <br />
                    <span className="px-2 py-1 rounded-md bg-[#222831] text-white text-xs">
                      {item.type}
                    </span>
                  </p>
                  <p className="text-sm font-normal mt-4">{item.description}</p>
                  <div>
                    {item.location && (
                      <p className="text-sm inline font-normal bg-gray-300 px-2 py-1 rounded">
                        {item.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        : <p>No work history available</p>}
    </div>
  );
};

export default async function Timeline() {
    const data = await getWorkHistory()

    return (
        <div id="work" className="max-w-3xl w-full z-10 px-4 flex flex-col gap-y-3 my-10">
            <p className="text-xl font-medium text-left mb-10">Timeline ~</p>

            <TracingBeam className='md:ml-12 mb-20'>
                <TimelineProgress items={data} />
            </TracingBeam>
        </div>
    )
}
