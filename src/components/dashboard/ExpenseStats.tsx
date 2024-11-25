"use client";
import * as React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { ExpenseStatProps } from "./types";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

export const ExpenseStats: React.FC<ExpenseStatProps> = ({ data }) => {
  const COLORS = data.map((item) => item.color);

  const chartConfig = data.reduce((acc, item) => {
    acc[item.category] = { label: item.category, color: item.color };
    return acc;
  }, {} as ChartConfig);

  const renderCustomizedLabel = (props: any) => {
    const { x, y, value } = props;
    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
      >
        {value}
      </text>
    );
  };

  return (
    <section className="col-span-4" aria-label="Expense Statistics">
      <h2 className="text-2xl font-semibold text-slate-700 pb-1.5">
        Expense Statistics
      </h2>
      <div className="bg-white rounded-3xl p-4 shadow-lg max-w-[400px] mx-auto">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[400px] [&_.recharts-text]:fill-background"
        >
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="category" hideLabel />}
              />
              <Pie
                data={data}
                dataKey="percentage"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={150}
                innerRadius={80}
                fill="#8884d8"
                labelLine={false}
                paddingAngle={5}
                label={renderCustomizedLabel}
              >
                <LabelList
                  dataKey="category"
                  className="fill-background"
                  stroke="none"
                  fontSize={12}
                  formatter={(value: keyof typeof chartConfig) =>
                    chartConfig[value]?.label
                  }
                />
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </section>
  );
};
