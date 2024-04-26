'use client';

import { useRouter } from "next/navigation";
import { SegmentedControl } from "@mantine/core";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import data from '@/data/data.json';

const yPositionMobile: {[key: string]: number} = {
  'Home': 0,
  'Work': 965,
  'Projects': 2209,
  'Stack': 5258,
  'Contact': 5885,
}

const yPositionTablet: {[key: string]: number} = {
  'Home': 0,
  'Work': 1068,
  'Projects': 2200,
  'Stack': 3918,
  'Contact': 4490,
}

const yPositionDesktop: {[key: string]: number} = {
  'Home': 0,
  'Work': 952,
  'Projects': 1839,
  'Stack': 3406,
  'Contact': 3975,
}

export default function Menu() {
  const { opts, disableScrollEffect } = data.menu;

  const [scroll, scrollTo] = useWindowScroll();

  const router = useRouter()

  const xs = useMediaQuery('(max-width: 640px)');
  const sm = useMediaQuery('(min-width: 640px)');
  const xl = useMediaQuery('(min-width: 1280px)');

  const handleChange = (v: string) => {
    if (xs || disableScrollEffect) router.push(`/#${v.toLowerCase()}`);
    else if (xl) scrollTo({ y: yPositionDesktop[v] });
    else if (sm) scrollTo({ y: yPositionTablet[v] });
    else scrollTo({ y: yPositionMobile[v] });
  }

  return (
    <div className="w-full flex justify-center fixed bottom-5">
      <SegmentedControl
        radius="xs"
        color={data.colors.primary}
        withItemsBorders={false}
        data={opts}
        onChange={handleChange}
        bg={data.colors.blackMenuBg}
      />
    </div>
  )
}
