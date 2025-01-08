import { Header, RecurringBillSummary } from "@/components";
import { iTransaction } from "@/utils/models";
import { useMemo } from "react";

export function RecurringBills() {
  const bills: iTransaction[] = useMemo(() => {
    const result:iTransaction[] = [
      {
        id: "1",
        amount: 100,
        name: "Rent",
        date: new Date(),
        avatar: "Monthly Rent",
        recurring: false
      },
      {
        id: "2",
        amount: 50,
        name: "Subscription",
        date: new Date(),
        avatar: "Monthly Netflix Subscription",
        recurring: false
      },
      {
        id: "3",
        amount: 200,
        name: "Utilities",
        date: new Date(),
        avatar: "Monthly Utility Bill",
        recurring: false
      },
      {
        id: "4",
        amount: 100,
        name: "Insurance",
        date: new Date(),
        avatar: "Monthly Insurance Premium",
        recurring: false
      },
      {
        id: "5",
        amount: 200.05,
        name: "Insurance",
        date: new Date(),
        avatar: "Monthly Insurance Premium",
        recurring: false
      },


    ];
    return result;
  }, []);

  return (
    <>
      <Header />
      <RecurringBillSummary bills={bills} />     
    </>
  );
}
