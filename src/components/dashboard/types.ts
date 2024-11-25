export interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  ariaLabel?: string;
}

export interface CardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  variant: "dark" | "light";
  ariaLabel?: string;
}

export interface TransactionProps {
  type: string;
  amount: string;
  date: string;
  icon: string;
  ariaLabel?: string;
}

export interface QuickTransferUserProps {
  image: string;
  name: string;
  role: string;
  ariaLabel?: string;
}

export interface WeeklyActivityProps {
  data: {
    deposit: number;
    withdraw: number;
    day: string;
  }[];
}

export interface ExpenseStatProps {
  data: {
    category: string;
    percentage: number;
    color: string;
  }[];
}

export interface BalanceHistoryProps {
  data: {
    month: string;
    balance: number;
  }[];
}
