import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImagePlaceHolder = ({ height }) => (
  <div style={{ height, background: "red" }} />
);
export default function LazyImage({ width = "100%", src }) {
  return (
    <LazyLoadImage
      alt="unsplash_img"
      height="auto"
      width={width}
      effect="opacity"
      src={src}
    />
  );
}
