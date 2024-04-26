"use client";

import Link from "next/link";
import Image from "next/image";
import { Text, Timeline } from "@mantine/core";
import { IconBrandLinkedin, IconWorldWww } from "@tabler/icons-react";
import data from '@/data/data.json';

export default function WorkTimeline() {
  const { timeline } = data.work

  return (
    <Timeline active={3} bulletSize={50} lineWidth={2} color={data.colors.primary}>
      {timeline.map((w) => (
        <Timeline.Item
          key={`work-${w.id}`}
          title={w.title}
          c={data.colors.white}
          bullet={(
            <Image src={w.logo} alt={w.company} width={24} height={24} className={w.id === 2 ? 'rounded-full': ''} />
          )}
        >
          <Text c="dimmed" size="sm">· {w.location}</Text>

          <Text c="dimmed" size="sm">· {w.industry}</Text>

          <Text size="xs" mt={4}>{w.startDate} - {w.endDate}</Text>

          <div className="flex item-center gap-3 mt-4">
            {w.linkedin.length ? (
              <Link
                href={w.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin stroke={1} size={30} color={data.colors.white} />
              </Link>
            ) : null}

            {w.website.length ? (
              <Link
                href={w.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWorldWww stroke={1} size={28} color={data.colors.white} />
              </Link>
            ) : null}
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}
