import { useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Box, makeStyles } from "@material-ui/core";
import Image from "next/image";

export default function Map({ mapState, children }) {
  const classes = useStyles();
  const { dark, zoom, blur, position, freezed } = mapState;

  return (
    <ScrollContainer
      className={classes.mapScroller}
      hideScrollbars={true}
      vertical={true}
      horizontal={true}
      ignoreElements={freezed ? "*" : ""}
      // ref={container}
    >
      <Box
        width={2500}
        height={1355}
        position="relative"
        style={{
          transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
          transition: "all 0.2s ease",
        }}
        className="map-img"
      >
        <img
          src="/assets/images/world-map.png"
          alt=""
          style={{ filter: `blur(${blur}px)`, transition: "all 0.2s ease" }}
        />
        <Box
          className={classes.mapOverlay}
          style={{
            backgroundColor: `rgba(0,0,0,${dark})`,
            transition: "all 0.2s ease",
          }}
        />

        {children}
      </Box>
    </ScrollContainer>
  );
}

const useStyles = makeStyles((theme) => ({
  mapScroller: {
    width: "100%",
    height: "100%",
    cursor: "grab",

    "&.indiana-scroll-container--dragging": {
      cursor: "grabbing",
    },
  },
  mapOverlay: {
    width: "100%",
    height: "100%",
    zIndex: 3,
    position: "absolute",
    top: 0,
    left: 0,
  },
}));
