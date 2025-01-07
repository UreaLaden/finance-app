import { BalanceCard } from "@/components/BalanceCard/BalanceCard";
import { iSummarySection } from "@/utils/models";
import { FC } from "react";
import { SummarySectionContainer } from "./SummarySection.component";

export const SummarySection: FC<iSummarySection> = ({ data }) => {
  return (
    <SummarySectionContainer className={"summary-section"}>
      {data.map((card) => (
        <BalanceCard {...card} />
      ))}
    </SummarySectionContainer>
  );
};
