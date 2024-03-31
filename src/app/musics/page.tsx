"use client";
import dynamic from "next/dynamic";

type Props = {};

const ReactPlayerYoutube = dynamic(() => import("react-player/youtube"), { ssr: false });
const PlayerFrameDynamic = dynamic(() => import("@/components/PlayerFrame"), { ssr: false });

const MusicList = (props: Props) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-center align-center">
        <ReactPlayerYoutube url="https://www.youtube.com/watch?v=uDgBO6brbSI" />
      </div>
      <section>
        <PlayerFrameDynamic />
      </section>
    </div>
  );
};

export default MusicList;
