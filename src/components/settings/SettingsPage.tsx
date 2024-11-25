import * as React from "react";
import { InputField } from "./InputField";

export default function SettingsPage() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      {/* <header className="flex flex-wrap gap-5 justify-between px-11 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-10 my-auto">
          <div className="flex gap-2.5 text-2xl font-extrabold text-slate-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5ed70beae91272b3cfa5c62140d8e8810ec8165b755443002ed2998bfb743c5?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
              alt=""
              className="object-contain shrink-0 aspect-square w-[35px]"
            />
            <span className="basis-auto">Soar Task</span>
          </div>
          <h1 className="text-3xl font-semibold text-slate-700">Setting</h1>
        </div>
        <div className="flex flex-wrap gap-8 items-center text-base text-slate-400">
          <div className="flex gap-4 self-stretch px-6 py-4 my-auto shadow-lg bg-slate-100 rounded-[40px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/78a1fbb99413c77e72b70061d5ae5cf2ae119117056d9d9b3112d1e07d5cbc4f?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
              alt=""
              className="object-contain shrink-0 w-5 aspect-square"
            />
            <span className="basis-auto">Search for something</span>
          </div>
          <nav className="flex gap-4">
            {[3, 4, 5].map((num) => (
              <img
                key={num}
                loading="lazy"
                src={`http://b.io/ext_${num}-`}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
              />
            ))}
          </nav>
        </div>
      </header> */}

      <div className="flex shrink-0 self-end max-w-full h-px bg-slate-200 w-[1190px]" />

      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-10 pt-8 pb-44 w-full bg-slate-100 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
              <article className="flex flex-col items-end px-8 py-9 w-full bg-white rounded-3xl min-h-[717px] max-md:px-5 max-md:max-w-full">
                <form className="flex flex-col w-full rounded-none max-w-[1050px] max-md:max-w-full">
                  <nav className="flex gap-10 items-center self-start ml-4 text-base font-medium text-slate-400 max-md:ml-2.5">
                    <span className="self-stretch my-auto text-neutral-800">
                      Edit Profile
                    </span>
                    <span className="self-stretch my-auto">Preferences</span>
                    <span className="self-stretch my-auto">Security</span>
                  </nav>

                  <div className="flex mt-2 max-md:max-w-full">
                    <div className="flex shrink-0 rounded-xl bg-neutral-800 h-[3px] w-[114px]" />
                    <div className="flex grow shrink-0 self-start h-px bg-gray-100 basis-0 w-fit max-md:max-w-full" />
                  </div>

                  <div className="flex flex-wrap gap-10 items-start mt-10 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bfe9ac9b5179913af1caae19e180111abe6abdec2347f4b7ca2c40de346858b?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
                      alt="Profile"
                      className="object-contain shrink-0 aspect-[1.08] w-[98px]"
                    />

                    <div className="flex flex-col gap-6 rounded-none min-w-[240px] w-[865px] max-md:max-w-full">
                      <div className="flex flex-wrap gap-7">
                        <InputField label="Your Name" value="Charlene Reed" />
                        <InputField label="User Name" value="Charlene Reed" />
                      </div>

                      <div className="flex flex-wrap gap-7">
                        <InputField
                          label="Email"
                          value="charlenereed@gmail.com"
                        />
                        <InputField
                          label="Password"
                          value="**********"
                          type="password"
                        />
                      </div>

                      <div className="flex flex-wrap gap-7">
                        <InputField
                          label="Date of Birth"
                          value="25 January 1990"
                          hasIcon
                        />
                        <InputField
                          label="Present Address"
                          value="San Jose, California, USA"
                        />
                      </div>

                      <div className="flex flex-wrap gap-7">
                        <InputField
                          label="Permanent Address"
                          value="San Jose, California, USA"
                        />
                        <InputField label="City" value="San Jose" />
                      </div>

                      <div className="flex flex-wrap gap-7">
                        <InputField label="Postal Code" value="45962" />
                        <InputField label="Country" value="USA" />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="self-end mt-10 px-5 py-3.5 text-lg font-medium text-center text-white whitespace-nowrap rounded-2xl bg-neutral-800 w-[190px]"
                  >
                    Save
                  </button>
                </form>
              </article>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
