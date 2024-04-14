"use client";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/widgets/Sidebar"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen pt-16">
      <Sidebar />
    </main>
  );
}
