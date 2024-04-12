"use client";
import dynamic from "next/dynamic";

type Props = {};

const ReactPlayerYoutube = dynamic(() => import("react-player/youtube"), { ssr: false });
const PlayerFrameDynamic = dynamic(() => import("@/components/PlayerFrame"), { ssr: false });

const MusicList = (props: Props) => {
  return (
    <div className="flex flex-col justify-between align-center min-h-screen">
      <div className="flex justify-center align-center flex-1">
        <ReactPlayerYoutube url="https://www.youtube.com/watch?v=uDgBO6brbSI" />
      </div>
      <section className="flex justify-center align-center min-h-5">
        <PlayerFrameDynamic />
      </section>
    </div>
  );
};

export default MusicList;
