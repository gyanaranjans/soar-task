"use client";
import React from "react";
import { Card } from "./Card";
import { Transaction } from "./Transaction";
import { QuickTransfer } from "./QuickTransferUser";
import { WeeklyActivity } from "./WeeklyActivity";
import { ExpenseStats } from "./ExpenseStats";
import { BalanceHistory } from "./BalanceHistory";
import { useDashboard } from "@/context/dashboardContext";

export const Dashboard: React.FC = () => {
  const {
    transactions,
    weeklyActivityData,
    expenseStatsData,
    balanceHistoryData,
  } = useDashboard();

  return (
    <main className="w-full bg-slate-100 min-h-screen pt-5">
      <div className="flex gap-5 p-5 max-md:flex-col">
        <div className="w-full">
          <div className="grid grid-cols-12 gap-6">
            {/* First Row: Cards and Recent Transactions */}
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-2xl font-semibold text-slate-700">
                My Cards
              </h2>
              <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:overflow-x-auto">
                <Card
                  balance="$5,756"
                  cardHolder="Eddy Cusuma"
                  validThru="12/22"
                  cardNumber="3778 **** **** 1234"
                  variant="dark"
                />
                <Card
                  balance="$5,756"
                  cardHolder="Eddy Cusuma"
                  validThru="12/22"
                  cardNumber="3778 **** **** 1234"
                  variant="light"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <section aria-label="Recent Transactions">
                <h2 className="text-2xl font-semibold text-slate-700">
                  Recent Transactions
                </h2>
                <div className="bg-white rounded-3xl p-7 shadow-md mt-4">
                  {transactions.map((transaction, index) => (
                    <div key={index} className={index > 0 ? "mt-5" : ""}>
                      <Transaction {...transaction} />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Second Row: Weekly Activity and Expense Statistics */}
            <div className="col-span-12 lg:col-span-8">
              <WeeklyActivity data={weeklyActivityData} />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <ExpenseStats data={expenseStatsData} />
            </div>

            {/* Third Row: Quick Transfer and Balance History */}
            <div className="col-span-12 lg:col-span-4">
              <QuickTransfer />
            </div>
            <div className="col-span-12 lg:col-span-8 h-[300px]">
              <BalanceHistory data={balanceHistoryData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
