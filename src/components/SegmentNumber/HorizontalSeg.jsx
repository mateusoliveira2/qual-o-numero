import { Box } from "@chakra-ui/react";
import React from "react";
import Arrow from "./Arrow";

export default function ({ width, height, color }) {
  const style = {
    horizontal: {
      position: "relative",
      margin: "0 auto",
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: color,
    },
  };

  return (
    <Box style={style.horizontal}>
      <Arrow size={height} color={color} direction="left" />
      <Arrow size={height} color={color} direction="right" />
    </Box>
  );
}
