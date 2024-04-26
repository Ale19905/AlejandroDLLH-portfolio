import WorkTimeline from "./work-timeline";
import Accomplishments from "./accomplishments";
import SectionHeader from "./section-header";
import data from '@/data/data.json';

export default function Work() {
  const { title, subtitle, accomplishments } = data.work

  return (
    <div className="w-full flex flex-col items-center xl:w-[1100px]">
      <SectionHeader title={title} subtitle={subtitle} />

      <section className="w-full pb-10 flex justify-center xl:justify-around xl:w-[1200px] ">
        {accomplishments ? (
          <div className="hidden xl:block xl:w-[500px]">
            <Accomplishments />
          </div>
        ) : null}

        <WorkTimeline />
      </section>

      {accomplishments ? (
        <section className="w-full sm:w-[500px] flex justify-center xl:hidden">
          <Accomplishments />
        </section>
      ) : null}
    </div>
  )
}
