import React from "react";
import Arrow from "./Arrow";

export default function ({ width, height, color, align }) {
  const style = {
    vertical: {
      position: "absolute",
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: color,
    },
  };

  if (align === "left") {
    style.vertical.left = "0px";
  } else {
    style.vertical.right = "0px";
  }

  return (
    <div style={style.vertical}>
      <Arrow size={width} color={color} direction="top" />
      <Arrow size={width} color={color} direction="bottom" />
    </div>
  );
}
