type Props = {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <section className="w-full pb-20 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center">{title}</h2>

      <p className="hidden text-sm text-gray sm:block">{subtitle}</p>
    </section>
  )
}
