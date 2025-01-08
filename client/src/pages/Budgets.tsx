import { Budget, Header } from "@/components";
import { BudgetSummary } from "@/components/Sections/BudgetSummary/BudgetSummary";
import { iBudget } from "@/utils/models";
import { useMemo } from "react";

export function Budgets() {
  const onAddBudget = () => {
    console.log("Add Budget - Not yet implemented");
  };

  const budgets: iBudget[] = useMemo(
    () => [
      {
        category: "Entertainment",
        maximum: 50,
        theme: "var(--purple-primary)",
        id: "",
        spent: 0,
        remaining: 0,
        transactions: [],
      },
      {
        category: "Bills",
        maximum: 200,
        theme: "var(--red-primary)",
        id: "",
        spent: 0,
        remaining: 0,
        transactions: [],
      },
      {
        category: "Dining Out",
        maximum: 100,
        theme: "var(--blue-secondary)",
        id: "",
        spent: 0,
        remaining: 0,
        transactions: [],
      },
      {
        category: "Personal Care",
        maximum: 100,
        theme: "var(--magenta-secondary)",
        id: "",
        spent: 0,
        remaining: 0,
        transactions: [],
      },
    ],
    []
  );

  const Budgets = useMemo(() => {
    return budgets.map((budget, index) => <Budget key={index} {...budget} />);
  }, [budgets]);

  return (
    <>
      <Header showAdd={true} onClick={onAddBudget} />
      <div className={"budget-content-container"}>
        <BudgetSummary budgets={budgets} />
        {Budgets}
      </div>
    </>
  );
}
