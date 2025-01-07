import { SummarySection } from "@/components";
import { Header } from "@/components/Sections/Header/Header";
import { iBalanceCard } from "@/utils/models";

export function Overview() {
  const data: iBalanceCard[] = [
    {
      title: "Current Balance",
      amount: 1775.0,
      highlight: true,
    },
    {
      title: "Income",
      amount: 2337.79,
      highlight: false,
    },
    {
      title: "Expense",
      amount: 505.15,
      highlight: false,
    },
  ];

  return (
    <>
      <Header />
      <SummarySection data={data} />
      <div className={"summary-content-container"}>
        <div className={"pots"}>Pots</div>
        <div className={"budgets"}>Budgets</div>
        <div className={"transactions"}>Transactions</div>
        <div className={"recurring-bills"}>Recurring Bills</div>
      </div>
    </>
  );
}
