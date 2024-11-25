"use client";
import * as React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import { BalanceHistoryProps } from "./types";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

export const BalanceHistory: React.FC<BalanceHistoryProps> = ({ data }) => {
  const chartConfig: ChartConfig = {
    balance: { label: "Balance", color: "#4F46E5" },
  };

  return (
    <section className="col-span-8" aria-label="Balance History">
      <h2 className="text-2xl font-semibold text-slate-700 pb-3">
        Balance History
      </h2>
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data} margin={{ left: 12, right: 12 }}>
              <defs>
                <filter id="shadow" height="330%">
                  <feDropShadow
                    dx="2"
                    dy="2"
                    stdDeviation="3"
                    floodColor="#4F46E5"
                  />
                </filter>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8} />
                  <stop
                    offset="95%"
                    stopColor="#4F46E5"
                    stopOpacity={0}
                  />+{" "}
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#4F46E5"
                fillOpacity={1}
                fill="url(#colorBalance)"
              />
              <Line
                dataKey="balance"
                type="natural"
                stroke="#4F46E5"
                strokeWidth={2}
                dot={false}
                filter="url(#shadow)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </section>
  );
};
