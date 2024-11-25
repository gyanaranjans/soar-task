import * as React from "react";
import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => {
  return (
    <div
      className={`flex gap-7 items-center ${
        isActive ? "text-neutral-800" : "text-zinc-400"
      }`}
    >
      {isActive && (
        <div className="flex shrink-0 self-stretch w-1.5 rounded-none bg-neutral-800 h-[60px]" />
      )}
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 aspect-square w-[25px]"
      />
      <span className="self-stretch my-auto">{label}</span>
    </div>
  );
};
