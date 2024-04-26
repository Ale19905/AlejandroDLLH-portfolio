import Image from "next/image";
import { Paper } from "@mantine/core";
import data from '@/data/data.json';

export default function Header() {
  const { role, name, image, description } = data.header

  return (
    <header className="w-full flex flex-col items-center xl:flex-row xl:w-[1250px] xl:items-end xl:gap-10">
      <section className="w-full pb-5 xl:hidden">
        <h1 className="text-3xl font-bold text-center">{role}</h1>
      </section>

      <section className="w-[320px] flex justify-center xl:w-max">
        <div className="flex justify-center relative">
          <Image
            src={image}
            alt={name}
            width={260}
            height={400}
            className="block xl:hidden"
            priority
          />

          <Image
            src={image}
            alt={name}
            width={500}
            height={600}
            className="hidden xl:block"
            priority
          />

          <div className="absolute -bottom-5 -right-2 z-10">
            <p className="text-3xl font-whisper xl:text-5xl">{name}</p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center-center sm:w-[600px] xl:w-[800px] xl:gap-3">
        <h1 className="text-5xl font-bold  hidden xl:block">{role}</h1>

        <Paper shadow="xl" radius="xs" p="xl" bg={data.colors.blackPaperBg} classNames={{ root: 'backdrop-blur-md' }}>
          {description.map((d, idx) => (
            <p
              key={`description-${idx}`}
              className="text-left text-pretty pb-4 xl:text-lg"
            >
              {d}
            </p>
          ))}
        </Paper>
      </section>
    </header>
  )
}
