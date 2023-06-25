import * as React from "react";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";

export function Thumbnail({ file, alt, className }: any) {
  const image = getImage(file) as IGatsbyImageData;
  return (
    <>
      {image ? (
        <GatsbyImage
          image={image}
          alt={alt}
          className={`block w-full h-72 ${className}`}
        />
      ) : (
        <StaticImage
          src="https://placehold.co/265/png"
          alt={alt}
          className={`block w-full h-72 ${className}`}
        />
      )}
    </>
  );
}
