import { iBalanceCard } from "@/utils/models";
import { FC } from "react";
import { CardContainer } from "./BalanceCard.component";
import { toCurrency } from "@/utils/helpers/helpers";

export const BalanceCard: FC<iBalanceCard> = ({ title, amount,highlight }) => {
  return (
    <CardContainer $highlight={highlight}>
      <h3>{title}</h3>
      <p>{toCurrency(amount)}</p>
    </CardContainer>
  );
};
