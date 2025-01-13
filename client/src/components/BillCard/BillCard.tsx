import { iBillCardProps } from "@/utils/models";
import { FC, useMemo } from "react";
import { BillCardContainer } from "./BillCard.component";
import { toCurrency } from "@/utils/helpers/helpers";

export const BillCard: FC<iBillCardProps> = (props) => {
  const Theme = useMemo(() => {
    switch (props.type) {
      case "paid":
        return "var(--green-primary)";
      case "due":
        return "var(--cyan-primary)";
      case "upcoming":
        return "var(--yellow-primary)";
      default:
        return "var(--orange-secondary)";
    }
  }, [props.type]);

  const Title = useMemo(() => {
    switch (props.type) {
      case "paid":
        return "Paid Bills";
      case "due":
        return "Due Soon";
      case "upcoming":
        return "Total Upcoming";
      default:
        return "Error";
    }
  }, [props.type]);

  const Amount = useMemo(() => {
    return toCurrency(194.98);
  },[])
  return (
    <BillCardContainer $theme={Theme}>
      <div className={"bill-content"}>
        <div>{Title}</div>
        <div>{Amount}</div>
      </div>
    </BillCardContainer>
  );
};
