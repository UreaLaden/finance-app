import { BillCard, DisplayCard, SummarySection } from "@/components";
import { Header } from "@/components/Sections/Header/Header";
import { iBalanceCard } from "@/utils/models";
import { paths } from "@/utils/routers/config";
import { useLocation, useNavigate } from "react-router-dom";

export function Overview() {
  const navigate = useNavigate();
  const location = useLocation();

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
        <DisplayCard
          header={"Pots"}
          buttonLabel={"See Details"}
          className={"pots"}
          onHeaderClick={() => console.log("View All Pots")}
        >
          <div></div>
        </DisplayCard>
        <DisplayCard
          header={"Budgets"}
          buttonLabel={"See Details"}
          className={"budgets"}
          onHeaderClick={() => console.log("Budget Clicked")}
        >
          <div></div>
        </DisplayCard>
        <DisplayCard
          header={"Transactions"}
          buttonLabel={"View All"}
          className={"transactions"}
          onHeaderClick={() => console.log("Transactions Clicked")}
        >
          <div></div>
        </DisplayCard>
        <DisplayCard
          header={"Recurring Bills"}
          buttonLabel={"See Details"}
          className={"recurring-bills"}
          onHeaderClick={() =>
            navigate(paths.RecurringBills, { state: { from: location } })
          }
        >
          <BillCard type={"paid"} bills={[]} />
          <BillCard type={"upcoming"} bills={[]} />
          <BillCard type={"due"} bills={[]} />
        </DisplayCard>
      </div>
    </>
  );
}
