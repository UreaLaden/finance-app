import { Header, TransactionTable } from "@/components";
import { iTransaction } from "@/utils/models";
import { useMemo } from "react";

export function Transactions() {
const transactions: iTransaction[] = useMemo(() => {
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
        recurring: true
      },
      {
        id: "5",
        amount: 200.05,
        name: "Insurance",
        date: new Date(),
        avatar: "Monthly Insurance Premium",
        recurring: false
      },
      {
        id: "6",
        amount: 200.05,
        name: "Auto Loan",
        date: new Date(),
        avatar: "Loan",
        recurring: true
      },


    ];
    return result;
  }, []);
  
  return (
    <>
    <Header/>
    <TransactionTable transactions={transactions} />
    </>
  );
}
