import ContactForm from "./telegram-form";
import ContactLinks from "./contact-links";
import SectionHeader from "./section-header";
import data from '@/data/data.json';

export default function Contacts() {
  const { title, subtitle } = data.contacts;

  return (
    <div className="w-full flex flex-col items-center xl:w-[1100px]">
      <SectionHeader title={title} subtitle={subtitle} />

      <section className="w-[320px] xl:w-full pb-20 flex xl:justify-evenly xl:flex-row">
        {data.contacts.links ? <ContactLinks /> : null}

        <div className="hidden xl:block">
          <ContactForm />
        </div>
      </section>

      <section className="block xl:hidden">
        <ContactForm />
      </section>
    </div>
  )
}
