import * as React from "react";
import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  type = "text",
  hasIcon,
  error,
  ...rest
}) => {
  return (
    <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
      <label className="self-start text-base text-neutral-800">{label}</label>
      <div className="flex gap-5 justify-between px-5 py-4 mt-3 text-base bg-white rounded-2xl border border-solid border-slate-200 text-slate-400">
        <input
          type={type}
          defaultValue={value}
          className="bg-transparent border-none outline-none w-full"
          {...rest}
        />
        {hasIcon && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d224fec9d252777656d68fd06e3d2ac44b6719d29dc65619bf3bd7825630f7a?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
            alt=""
            className="object-contain shrink-0 my-auto w-3.5 aspect-[1.75]"
          />
        )}
      </div>
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
};
