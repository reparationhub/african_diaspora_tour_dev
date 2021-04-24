import { useState } from "react";
import { Box } from "@material-ui/core";
import DarkStoryPopup from "./DarkStoryPopup";

export default function DarkStoryButton({ darkStory }) {
  const { position } = darkStory;
  const [open, setOpen] = useState(false);

  const handleDialog = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    let audio = new Audio("/assets/sounds/dark-popup.mp3");
    audio.play();
    handleDialog();
  };

  return (
    <>
      <DarkStoryPopup {...{ open, handleDialog, darkStory }} />
      <Box
        className="dark-story-button"
        style={{
          top: position.y,
          left: position.x,
        }}
        onClick={handleClick}
      >
        <Box className="button-ripple" />
        <Box className="button-pointer" />
      </Box>
    </>
  );
}
