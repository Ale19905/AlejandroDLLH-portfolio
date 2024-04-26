import Image from "next/image";
import Link from "next/link";
import { IconLink } from "@tabler/icons-react";
import ProjectCards from "./project-cards";
import SectionHeader from "./section-header";
import data from '@/data/data.json';

export default function Projects() {
  const { title, subtitle } = data.projects;

  return (
    <div className="w-full flex flex-col items-center xl:w-[1100px]">
      <SectionHeader title={title} subtitle={subtitle} />

      <section className="pb-10">
        <ProjectCards />
      </section>

      {data.projects.openSource ? (
        <section className="w-full sm:w-[500px] flex flex-col items-center xl:pt-20">
          <div className="pb-5">
            <h3 className="text-lg font-semibold ">{data.projects.openSource.title}</h3>
          </div>

          <ul className="flex flex-col gap-3">
            {data.projects.openSource.items.map((p) => (
              <li key={`op-${p.id}`}>
                <Link
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Image
                    src={p.image}
                    alt="NPM"
                    width={30}
                    height={30}
                  />

                  <p className="text-lg font-semibold hover:text-link">{p.title}</p>

                  <IconLink stroke={1} size={25} color={data.colors.white} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
