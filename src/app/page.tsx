"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Sidebar = dynamic(() => import("@/widgets/Sidebar"), { ssr: false });

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen pt-24">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div>
          <button type="button" onClick={() => router.push("/musics")}>
            Music
          </button>
        </div>
      </div>
    </main>
  );
}
