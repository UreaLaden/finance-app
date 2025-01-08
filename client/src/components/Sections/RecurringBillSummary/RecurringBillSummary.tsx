import { FC } from "react";
import {
  RecurringBillContentContainer,
  RecurringBillSummarySection,
} from "./RecurringBillSummary.component";
import { iRecurringBillSummaryProps } from "@/utils/models";

import { TransactionTable } from "@/components";

export const RecurringBillSummary: FC<iRecurringBillSummaryProps> = ({
  bills,
}) => {
  return (
    <RecurringBillContentContainer>
      <RecurringBillSummarySection>
        <div>384.98</div>
        <div>Summary</div>
      </RecurringBillSummarySection>
      <TransactionTable transactions={bills} />
    </RecurringBillContentContainer>
  );
};
