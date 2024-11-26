"use client";
import * as React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputField } from "./InputField";
import { DatePicker } from "@/components/ui/DatePicker";
import { isFuture } from "date-fns";

interface FormValues {
  yourName: string;
  userName: string;
  email: string;
  password: string;
  dateOfBirth: Date | undefined;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

export default function SettingsPage() {
  const [profileImage, setProfileImage] = useState(
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1bfe9ac9b5179913af1caae19e180111abe6abdec2347f4b7ca2c40de346858b?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date("1990-01-25")
  );

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDateChange = (date: Date | undefined) => {
    if (date && isFuture(date)) {
      setError("dateOfBirth", {
        type: "manual",
        message: "Birthday cannot be a future date.",
      });
    } else {
      clearErrors("dateOfBirth");
      setSelectedDate(date);
    }
  };

  return (
    <main className="flex overflow-hidden flex-col bg-slate-200">
      <div className="flex shrink-0 self-end max-w-full h-px bg--200 w-[1190px]" />

      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-10 pt-8 pb-44 w-full bg--100 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
              <article className="flex flex-col items-end px-8 py-9 w-full bg-white rounded-3xl min-h-[717px] max-md:px-5 max-md:max-w-full">
                <form
                  className="flex flex-col w-full rounded-none max-w-[1050px] max-md:max-w-full"
                  onSubmit={handleSubmit(onSubmit)}
                >
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
                    <div className="relative">
                      <img
                        loading="lazy"
                        src={profileImage}
                        alt="Profile"
                        className="object-contain shrink-0 aspect-[1.08] w-[98px] cursor-pointer"
                        onClick={() =>
                          document.getElementById("fileInput")?.click()
                        }
                      />
                      <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </div>

                    <div className="flex flex-col gap-6 rounded-none min-w-[240px] w-[865px] max-md:max-w-full">
                      <div className="flex flex-wrap gap-7">
                        <InputField
                          label="Your Name"
                          value="Charlene Reed"
                          error={errors.yourName?.message}
                          {...register("yourName", {
                            required: "Your Name is required",
                          })}
                        />
                        <InputField
                          label="User Name"
                          value="Charlene Reed"
                          error={errors.userName?.message}
                          {...register("userName", {
                            required: "User Name is required",
                          })}
                        />
                      </div>

                      <div className="flex flex-wrap gap-7">
                        <InputField
                          label="Email"
                          value="charlenereed@gmail.com"
                          error={errors.email?.message}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        <InputField
                          label="Password"
                          value="**********"
                          type="password"
                          error={errors.password?.message}
                          {...register("password", {
                            required: "Password is required",
                          })}
                        />
                      </div>

                      <div className="flex flex-wrap gap-7">
                        <DatePicker
                          selectedDate={selectedDate}
                          onDateChange={handleDateChange}
                          error={errors.dateOfBirth?.message}
                        />
                        <InputField
                          label="Present Address"
                          value="San Jose, California, USA"
                          error={errors.presentAddress?.message}
                          {...register("presentAddress", {
                            required: "Present Address is required",
                          })}
                        />
                      </div>

                      <div className="flex flex-wrap gap-7">
                        <InputField
                          label="Permanent Address"
                          value="San Jose, California, USA"
                          error={errors.permanentAddress?.message}
                          {...register("permanentAddress", {
                            required: "Permanent Address is required",
                          })}
                        />
                        <InputField
                          label="City"
                          value="San Jose"
                          error={errors.city?.message}
                          {...register("city", {
                            required: "City is required",
                          })}
                        />
                      </div>

                      <div className="flex flex-wrap gap-7">
                        <InputField
                          label="Postal Code"
                          value="45962"
                          error={errors.postalCode?.message}
                          {...register("postalCode", {
                            required: "Postal Code is required",
                          })}
                        />
                        <InputField
                          label="Country"
                          value="USA"
                          error={errors.country?.message}
                          {...register("country", {
                            required: "Country is required",
                          })}
                        />
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
