"use client";

import * as React from "react";
import { format, isFuture } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  error?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
  error,
}) => {
  const handleDateChange = (date: Date | undefined) => {
    if (date && isFuture(date)) {
      return;
    }
    onDateChange(date);
  };

  return (
    <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
      <label className="self-start text-base text-neutral-800">
        Date of Birth
      </label>
      <div className="flex gap-5 justify-between px-5 py-4 mt-3 text-base bg-white rounded-2xl border border-solid border-slate-200 text-slate-400">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !selectedDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate ? (
                format(selectedDate, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
};
