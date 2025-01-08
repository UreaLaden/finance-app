import { iBudget } from "@/utils/models";
import { FC } from "react";
import { BudgetContainer } from "./Budget.component";
import { ThemeIndicator } from "../Pot/Pot.component";

export const Budget: FC<iBudget> = (props) => {
  return (
    <BudgetContainer $theme={props.theme} className={"budget-item"}>
      <div>
        <ThemeIndicator $color={props.theme} />
        {props.category}
      </div>
    </BudgetContainer>
  );
};
