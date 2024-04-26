import Link from "next/link";
import { Tooltip } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconLink } from "@tabler/icons-react";

import data from '@/data/data.json';

export default function ContactLinks() {
  const { links } = data.contacts;

  return (
    <ul className="flex flex-col gap-8 w-[320px] sm:w-[500px] xl:gap-10">
      {links.map((c) => (
        <li key={`contact-${c.id}`}>
          <Link
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-start gap-2 xl:items-center"
          >
            {c.network === 'LinkedIn' && <IconBrandLinkedin stroke={1} size={50} color={data.colors.white} />}
            {c.network === 'X' && <IconBrandX stroke={1} size={50} color={data.colors.white} />}
            {c.network === 'GitHub' && <IconBrandGithub stroke={1} size={50} color={data.colors.white} />}
            {c.network !== 'GitHub' && c.network !== 'LinkedIn' && c.network !== 'X' ? (
              <IconLink stroke={1} size={50} color={data.colors.white} />
            ) : null}

            <Tooltip
              withArrow
              transitionProps={{ transition:'pop', duration: 300 }}
              label={c.label}
              color={data.colors.primary}
              offset={15}
            >
              <div className="w-[260px] sm:w-full">
                <p className="inline text-sm font-semibold text-white text-pretty hover:text-link">
                  {c.description}
                </p>
              </div>
            </Tooltip>
          </Link>
        </li>
      ))}
    </ul>
  )
}
