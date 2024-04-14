"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

type Props = {};

const ReactPlayerYoutube = dynamic(() => import("react-player/youtube"), { ssr: false });
const PlayerFrameDynamic = dynamic(() => import("@/components/PlayerFrame"), { ssr: false });
const UndoIcon = dynamic(() => import("@mui/icons-material/UndoRounded"), { ssr: false });

const MusicList = (props: Props) => {
  const route = useRouter();
  return (
    <div className="relative bg-background-black">
      <button className="absolute top-5 left-5" onClick={() => route.back()}>
        <UndoIcon />
      </button>
      <div className="flex flex-col justify-between align-center min-h-screen">
        <div className="flex justify-center align-center flex-1">
          <ReactPlayerYoutube url="https://www.youtube.com/watch?v=uDgBO6brbSI" />
        </div>
        <section className="flex justify-center align-center min-h-5">
          <PlayerFrameDynamic />
        </section>
      </div>
    </div>
  );
};

export default MusicList;
