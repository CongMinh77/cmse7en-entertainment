"use client";
import {
  PauseCircleFilledOutlined,
  ReplayRounded,
  ShuffleRounded,
  SkipNextRounded,
  SkipPreviousRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

type Props = {};

const PlayerFrame = (props: Props) => {
  return (
    <div>
      <div>
        <IconButton sx={{ color: "white" }}>
          <ShuffleRounded />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <SkipPreviousRounded />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <PauseCircleFilledOutlined />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <SkipNextRounded />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <ReplayRounded />
        </IconButton>
      </div>
    </div>
  );
};

export default PlayerFrame;
