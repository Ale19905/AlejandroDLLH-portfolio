"use client";

import { List, ThemeIcon } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import data from '@/data/data.json';

export default function Accomplishments() {
  if (!data.work.accomplishments) return null

  const { title, data: aData } = data.work.accomplishments

  return (
    <div>
      <section className="pb-5">
        <h3 className="text-lg font-semibold xl:text-xl">{title}</h3>
      </section>

      <section>
        <List
          spacing="lg"
          size="sm"
          center
          icon={
            <ThemeIcon color={data.colors.primary} size={24} radius="xl">
              <IconCircleCheck stroke={1} size={30} color={data.colors.white} />
            </ThemeIcon>
          }
        >
          {aData.map((a) => (
            <List.Item key={`accomplishments-${a.id}`}>
              <p className="leading-5 xl:text-lg">{a.text}</p>
            </List.Item>
          ))}
        </List>
      </section>
    </div>
  )
}
