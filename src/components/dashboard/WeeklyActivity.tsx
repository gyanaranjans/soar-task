import * as React from "react";
import { BarChart, Bar, XAxis, CartesianGrid, Legend } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { WeeklyActivityProps } from "./types";

export const WeeklyActivity: React.FC<WeeklyActivityProps> = ({ data }) => {
  const chartConfig: ChartConfig = {
    deposit: { color: "#3B82F6" },
    withdraw: { color: "#1F2937" },
  };
  return (
    <section className="col-span-8" aria-label="Weekly Activity">
      <h2 className="text-2xl font-semibold text-slate-700 pb-1.5">
        Weekly Activity
      </h2>
      <div className="bg-white rounded-3xl p-8 shadow-md">
        <ChartContainer config={chartConfig} className="max-h-[380px] w-full">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            width={500}
            height={300}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" />
            {/* <YAxis domain={[0, 500]} /> */}
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="deposit" fill="#3B82F6" radius={4} barSize={30} />
            <Bar dataKey="withdraw" fill="#1F2937" radius={4} barSize={30} />
          </BarChart>
        </ChartContainer>
      </div>
    </section>
  );
};
