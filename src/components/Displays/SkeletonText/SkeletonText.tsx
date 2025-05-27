import "./SkeletonText.scss";
import React from "react";

interface SkText {
  width?: number;
  height?: number;
  className?: string;
}

export const SkeletonText = (props: SkText) => {
  const { width = 120, height = 40, className = "" } = props;
  return (
    <div
      style={{
        width: width.toString() + "px",
        height: height.toString() + "px",
      }}
      className={`skeleton-text ${className}`}
    />
  );
};
