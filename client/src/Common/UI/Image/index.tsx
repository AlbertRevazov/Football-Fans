import React, { FC } from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: {
    [key: string]: string;
  };
};

export const Image: FC<ImageProps> = ({ alt, style, src, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={style}
      className={className}
    />
  );
};
