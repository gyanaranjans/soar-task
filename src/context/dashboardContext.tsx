"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface Transaction {
  type: string;
  amount: string;
  date: string;
  icon: string;
}

interface WeeklyActivity {
  deposit: number;
  withdraw: number;
  day: string;
}

interface ExpenseStat {
  category: string;
  percentage: number;
  color: string;
}

interface BalanceHistory {
  month: string;
  balance: number;
}

interface DashboardContextProps {
  transactions: Transaction[];
  weeklyActivityData: WeeklyActivity[];
  expenseStatsData: ExpenseStat[];
  balanceHistoryData: BalanceHistory[];
}

const DashboardContext = createContext<DashboardContextProps | undefined>(
  undefined
);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [weeklyActivityData, setWeeklyActivityData] = useState<
    WeeklyActivity[]
  >([]);
  const [expenseStatsData, setExpenseStatsData] = useState<ExpenseStat[]>([]);
  const [balanceHistoryData, setBalanceHistoryData] = useState<
    BalanceHistory[]
  >([]);

  useEffect(() => {
    // Mock API calls
    setTransactions([
      {
        type: "Deposit from my Card",
        amount: "-$850",
        date: "28 January 2021",
        icon: "/icons/dashboard/business_finance_money.png",
      },
      {
        type: "Deposit Paypal",
        amount: "+$2,500",
        date: "25 January 2021",
        icon: "/icons/dashboard/paypal-payment-pay.png",
      },
      {
        type: "Jemi Wilson",
        amount: "+$5,400",
        date: "21 January 2021",
        icon: "/icons/dashboard/circle-dollar.png",
      },
    ]);

    setWeeklyActivityData([
      { deposit: 400, withdraw: 300, day: "Mon" },
      { deposit: 600, withdraw: 400, day: "Tue" },
      { deposit: 500, withdraw: 200, day: "Wed" },
      { deposit: 700, withdraw: 600, day: "Thu" },
      { deposit: 400, withdraw: 300, day: "Fri" },
      { deposit: 500, withdraw: 400, day: "Sat" },
      { deposit: 600, withdraw: 500, day: "Sun" },
    ]);

    setExpenseStatsData([
      { category: "Entertainment", percentage: 30, color: "#4F46E5" },
      { category: "Investment", percentage: 20, color: "#10B981" },
      { category: "Bill Expense", percentage: 15, color: "#F59E0B" },
      { category: "Others", percentage: 35, color: "#6B7280" },
    ]);

    setBalanceHistoryData([
      { month: "Jul", balance: 500 },
      { month: "Aug", balance: 600 },
      { month: "Sep", balance: 400 },
      { month: "Oct", balance: 700 },
      { month: "Nov", balance: 500 },
      { month: "Dec", balance: 600 },
      { month: "Jan", balance: 800 },
    ]);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        transactions,
        weeklyActivityData,
        expenseStatsData,
        balanceHistoryData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
