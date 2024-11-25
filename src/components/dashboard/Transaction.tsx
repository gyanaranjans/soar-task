import * as React from "react";
import { TransactionProps } from "./types";

export const Transaction: React.FC<TransactionProps> = ({
  type,
  amount,
  date,
  icon,
  ariaLabel,
}) => {
  return (
    <div
      className="flex flex-col w-full"
      role="listitem"
      aria-label={ariaLabel || `Transaction: ${type} ${amount}`}
    >
      <div className="flex items-center gap-4">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain w-[55px] aspect-square"
        />
        <div className="flex flex-col flex-1">
          <div className="text-base font-medium text-neutral-800">{type}</div>
          <div className="text-base text-slate-400">{date}</div>
        </div>
        <div
          className={`text-base font-medium ${
            amount.startsWith("+") ? "text-emerald-400" : "text-red-500"
          }`}
        >
          {amount}
        </div>
      </div>
    </div>
  );
};
