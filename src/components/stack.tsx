import SectionHeader from './section-header';
import StackTabs from './stack-tabs';
import data from '@/data/data.json';

export default function Stack() {
  if (!data.stack) return null;

  const { title, subtitle } = data.stack;

  return (
    <div className="w-full flex flex-col items-center xl:w-[1100px]">
      <SectionHeader title={title} subtitle={subtitle} />

      <section className="w-full sm:w-[500px] xl:w-[1150px]">
        <StackTabs />
      </section>
    </div>
  )
}
