import * as React from "react";
import Link from "next/link";
import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  isActive,
  path,
}) => {
  return (
    <Link href={path || "/"}>
      <div
        className={`flex gap-7 items-center p-2 rounded-lg cursor-pointer ${
          isActive ? "text-neutral-800 bg-gray-200" : "text-zinc-400"
        } hover:bg-gray-100`}
      >
        {isActive && (
          <div className="flex shrink-0 self-stretch w-1.5 rounded-none bg-neutral-800 h-[40px]" />
        )}
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 aspect-square w-[25px]"
        />
        <span className="self-stretch my-auto">{label}</span>
      </div>
    </Link>
  );
};
