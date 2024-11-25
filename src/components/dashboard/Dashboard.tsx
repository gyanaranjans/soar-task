"use client";
import * as React from "react";
import { Card } from "./Card";
import { Transaction } from "./Transaction";
import { QuickTransferUser } from "./QuickTransferUser";
import { WeeklyActivity } from "./WeeklyActivity";
import { ExpenseStats } from "./ExpenseStats";
import { BalanceHistory } from "./BalanceHistory";

const transactions = [
  {
    type: "Deposit from my Card",
    amount: "-$850",
    date: "28 January 2021",
    icon: "/assets/transaction-1.svg",
  },
  {
    type: "Deposit Paypal",
    amount: "+$2,500",
    date: "25 January 2021",
    icon: "/assets/transaction-2.svg",
  },
  {
    type: "Jemi Wilson",
    amount: "+$5,400",
    date: "21 January 2021",
    icon: "/assets/transaction-3.svg",
  },
];

const quickTransferUsers = [
  {
    image: "/assets/user-1.svg",
    name: "Livia Bator",
    role: "CEO",
  },
  {
    image: "/assets/user-2.svg",
    name: "Randy Press",
    role: "Director",
  },
  {
    image: "/assets/user-3.svg",
    name: "Workman",
    role: "Designer",
  },
];

const weeklyActivityData = [
  { deposit: 400, withdraw: 300, day: "Mon" },
  { deposit: 600, withdraw: 400, day: "Tue" },
  { deposit: 500, withdraw: 200, day: "Wed" },
  { deposit: 700, withdraw: 600, day: "Thu" },
  { deposit: 400, withdraw: 300, day: "Fri" },
  { deposit: 500, withdraw: 400, day: "Sat" },
  { deposit: 600, withdraw: 500, day: "Sun" },
];

const expenseStatsData = [
  { category: "Entertainment", percentage: 30, color: "#4F46E5" },
  { category: "Investment", percentage: 20, color: "#10B981" },
  { category: "Bill Expense", percentage: 15, color: "#F59E0B" },
  { category: "Others", percentage: 35, color: "#6B7280" },
];

const balanceHistoryData = [
  { month: "Jul", balance: 500 },
  { month: "Aug", balance: 600 },
  { month: "Sep", balance: 400 },
  { month: "Oct", balance: 700 },
  { month: "Nov", balance: 500 },
  { month: "Dec", balance: 600 },
  { month: "Jan", balance: 800 },
];

export const Dashboard: React.FC = () => {
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
              <div className="flex gap-4 mt-4 overflow-x-auto">
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
              <section aria-label="Quick Transfer">
                <h2 className="text-2xl font-semibold text-slate-700">
                  Quick Transfer
                </h2>
                <div className="bg-white rounded-3xl p-6 shadow-md mt-4">
                  <div className="flex gap-5 justify-between">
                    {quickTransferUsers.map((user, index) => (
                      <QuickTransferUser key={index} {...user} />
                    ))}
                  </div>
                  <form className="mt-7">
                    <div className="flex gap-7">
                      <input
                        type="text"
                        placeholder="Write Amount"
                        className="w-full p-3 rounded-lg bg-slate-100"
                        aria-label="Transfer amount"
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg"
                        aria-label="Send money"
                      >
                        Send Money
                      </button>
                    </div>
                  </form>
                </div>
              </section>
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
