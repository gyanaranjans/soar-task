import * as React from "react";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  variant,
  ariaLabel,
}) => {
  const bgColor = variant === "dark" ? "bg-black" : "bg-white";
  const textColor = variant === "dark" ? "text-white" : "text-slate-700";

  return (
    <div
      className={`flex flex-col pt-6 w-full ${bgColor} rounded-3xl shadow-lg`}
      role="article"
      aria-label={ariaLabel || `Credit card for ${cardHolder}`}
    >
      <div className="flex gap-5 justify-between self-center w-full max-w-[300px]">
        <div className="flex flex-col text-xs">
          <div className={variant === "dark" ? "text-white" : "text-slate-400"}>
            Balance
          </div>
          <div className={`self-start text-xl font-semibold ${textColor}`}>
            {balance}
          </div>
          <div
            className={`mt-8 ${
              variant === "dark"
                ? "text-white text-opacity-70"
                : "text-slate-400"
            }`}
          >
            CARD HOLDER
          </div>
          <div className={`text-base font-semibold ${textColor}`}>
            {cardHolder}
          </div>
        </div>
        <div className="flex flex-col items-start">
          <img
            loading="lazy"
            src={
              variant === "dark"
                ? "/assets/visa-white.svg"
                : "/assets/visa-dark.svg"
            }
            alt="Visa logo"
            className="object-contain self-end aspect-square w-[35px]"
          />
          <div
            className={`mt-8 text-xs ${
              variant === "dark"
                ? "text-white text-opacity-70"
                : "text-slate-400"
            }`}
          >
            VALID THRU
          </div>
          <div className={`text-base font-semibold ${textColor}`}>
            {validThru}
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between px-8 py-5 mt-9 w-full rounded-none">
        <div className={`my-auto text-2xl font-semibold ${textColor}`}>
          {cardNumber}
        </div>
        <div
          className={`flex flex-col items-center px-1.5 rounded-full ${
            variant === "dark" ? "bg-white" : "bg-slate-400"
          } bg-opacity-50 h-[30px] w-[30px]`}
        >
          <div
            className={`flex shrink-0 rounded-full ${
              variant === "dark" ? "bg-white" : "bg-slate-400"
            } bg-opacity-50 h-[30px] w-[30px]`}
          />
        </div>
      </div>
    </div>
  );
};
