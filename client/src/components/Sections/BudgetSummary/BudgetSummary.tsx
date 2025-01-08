import { iBudgetSummary } from "@/utils/models";
import { FC } from "react";
import { BudgetSummaryContainer } from "./BudgetSummary.component";

export const BudgetSummary: FC<iBudgetSummary> = (props) => {
  return (
    <BudgetSummaryContainer>
      {props.budgets.map((budget, index) => (
        <div key={index}>{budget.category}</div>
      ))}
    </BudgetSummaryContainer>
  );
};
