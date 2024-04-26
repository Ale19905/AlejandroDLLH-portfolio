'use client';

import Image from "next/image";
import { Paper, Tabs, Tooltip } from "@mantine/core";
import { IconTools, IconDeviceLaptop, IconBooks } from '@tabler/icons-react';
import data from '@/data/data.json';

export default function StackTabs() {
  if (!data.stack) return null;

  const { tabs, tabWithIcon } = data.stack;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Tech':
        return <IconDeviceLaptop stroke={1} size={18} color={data.colors.white} />;
      case 'Tools':
        return <IconTools stroke={1} size={18} color={data.colors.white} />;
      case 'Others':
        return <IconBooks stroke={1} size={18} color={data.colors.white} />;
      default:
        return null;
    }
  };

  return (
    <Tabs color={data.colors.white} variant='outline' defaultValue={tabs[0].name}>
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab
            key={`tab-${tab.name}`}
            value={tab.name}
            leftSection={tabWithIcon ? getIcon(tab.name) : null}
          >
            {tab.name}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabs.map((tab) => (
        <Tabs.Panel key={`tab-content-${tab.name}`} value={tab.name}>
          <Paper shadow="xs" radius="xs" p="xl" bg={data.colors.blackTabsBg} classNames={{ root: 'backdrop-blur-md' }}>
            <ul className="flex flex-wrap justify-evenly items-center gap-6">
              {tab.icons.map((t) => (
                <li key={`tab-icon-${t.id}`}>
                  <Tooltip
                    withArrow
                    transitionProps={{ transition:'pop', duration: 300 }}
                    label={t.label}
                    color={data.colors.primary}
                  >
                    <Image
                      src={t.icon}
                      alt={t.label}
                      width={50}
                      height={50}
                    />
                  </Tooltip>
                </li>
              ))}
            </ul>
          </Paper>
        </Tabs.Panel>
      ))}
    </Tabs>
  )
}
