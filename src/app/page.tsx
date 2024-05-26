"use client";

import Navbar from "@/components/Navbar";
import { ActiveSection } from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" bg-primary-100 w-screen h-screen">
      <Navbar section={ActiveSection.about} mode="on" setMode={null} />
    </main>
  );
}
