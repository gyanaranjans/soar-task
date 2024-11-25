import * as React from "react";
import { QuickTransferUserProps } from "./types";

export const QuickTransferUser: React.FC<QuickTransferUserProps> = ({
  image,
  name,
  role,
  ariaLabel,
}) => {
  return (
    <div
      className="flex flex-col items-center"
      role="button"
      tabIndex={0}
      aria-label={ariaLabel || `Transfer to ${name}, ${role}`}
    >
      <img
        loading="lazy"
        src={image}
        alt={`${name}'s profile`}
        className="object-contain aspect-square w-[70px]"
      />
      <div className="self-stretch mt-4 text-base text-neutral-800">{name}</div>
      <div className="mt-1.5 text-base text-slate-400">{role}</div>
    </div>
  );
};
