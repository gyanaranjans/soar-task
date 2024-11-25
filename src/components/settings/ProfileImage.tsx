import * as React from "react";
import { ProfileImageProps } from "./types";

export const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 aspect-[1.08] w-[98px]"
    />
  );
};
