'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, Badge, Group, Button, Tooltip } from '@mantine/core';
import { IconBrandNextjs, IconWorldWww, IconBrandReact } from '@tabler/icons-react';
import data from '@/data/data.json';

export default function ProjectCards() {
  if (!data.projects) return null;

  const { items } = data.projects;

  return (
    <div className='flex flex-col items-center gap-10 sm:w-[600px] sm:flex-row sm:flex-wrap sm:justify-evenly xl:w-full xl:justify-center'>
      {items.map((p) => (
        <Card key={`project-${p.id}`} shadow="sm" padding="lg" radius="xs" bg={data.colors.blackPaperBg} classNames={{ root: 'backdrop-blur-md' }}>
          <Card.Section className='relative'>
            <Image
              src={p.image}
              height={275}
              width={275}
              alt={p.name}
              className='block xl:hidden'
            />

            <Image
              src={p.image}
              height={340}
              width={340}
              alt={p.name}
              className='hidden xl:block'
            />

            <Tooltip
              withArrow
              transitionProps={{ transition:'pop', duration: 300 }}
              label={p.description}
            >
              <div className='absolute right-0 bottom-0 z-10'>
                {p.icon === 'nextjs' && <IconBrandNextjs stroke={1} size={40} color={data.colors.white} />}
                {p.icon === 'reactjs' && <IconBrandReact stroke={1} size={40} color={data.colors.white} />}
              </div>
            </Tooltip>
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <p className='font-bold text-lg text-white'>{p.name}</p>

            <Badge color={p.status === 'online' ? data.colors.red : data.colors.secondary}>
              {p.status}
            </Badge>
          </Group>

          <div className="flex justify-center mt-4">
            <Button
              variant='outline'
              color={data.colors.white}
              fullWidth
              component={Link}
              href={p.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconWorldWww stroke={1} size={28} color={data.colors.white} />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
