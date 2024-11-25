import * as React from "react";
import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  isActive,
  ariaLabel,
}) => {
  return (
    <div
      className="flex gap-7 items-center whitespace-nowrap"
      role="menuitem"
      aria-current={isActive ? "page" : undefined}
      aria-label={ariaLabel || label}
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
      <span className={isActive ? "text-neutral-800" : "text-zinc-400"}>
        {label}
      </span>
    </div>
  );
};
