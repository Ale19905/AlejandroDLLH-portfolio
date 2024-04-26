import { Metadata } from "next";
import { Divider } from "@mantine/core";

import Header from "@/components/header";
import Work from "@/components/work";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
import Contacts from "@/components/contacts";

import data from '@/data/data.json';

export const metadata: Metadata = {
  title: data.meta.title.home,
};

export default function Home() {
  return (
    <main className="min-h-screen w-full relative bg-gradient">
      <section id='home' className="pt-20 pb-20 xl:flex xl:justify-center xl:pb-40">
        <Header />
      </section>

      <div className="w-full flex justify-center">
        <Divider w="80%" my="sm" color={data.colors.secondary} />
      </div>

      <section id='work' className="px-6 py-20 xl:flex xl:justify-center xl:pb-40">
        <Work />
      </section>

      <div className="w-full flex justify-center">
        <Divider w="80%" my="sm" color={data.colors.secondary} />
      </div>

      {data.projects ? (
        <>
          <section id='projects' className="py-20 px-6 xl:flex xl:justify-center xl:pb-40">
            <Projects />
          </section>

        <div className="w-full flex justify-center">
            <Divider w="80%" my="sm" color={data.colors.secondary} />
          </div>
        </>
      ) : null}

      {data.stack ? (
        <>
          <section id='stack' className="py-20 px-6 xl:flex xl:justify-center xl:pb-40">
            <Stack />
          </section>

          <div className="w-full flex justify-center">
            <Divider w="80%" my="sm" color={data.colors.secondary} />
          </div>
        </>
      ) : null}

      <section id='contact' className="px-6 py-20 xl:flex xl:justify-center xl:pb-40">
        <Contacts />
      </section>
    </main>
  );
}
