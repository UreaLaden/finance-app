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
        avatar: "sun-park",
        recurring: false
      },
      {
        id: "2",
        amount: 50,
        name: "Subscription",
        date: new Date(),
        avatar: "pixel-playground",
        recurring: false
      },
      {
        id: "3",
        amount: 200,
        name: "Utilities",
        date: new Date(),
        avatar: "aqua-flow-utilities",
        recurring: false
      },
      {
        id: "4",
        amount: 100,
        name: "Insurance",
        date: new Date(),
        avatar: "swift-ride-share",
        recurring: true
      },
      {
        id: "5",
        amount: 200.05,
        name: "Insurance",
        date: new Date(),
        avatar: "swift-ride-share",
        recurring: false
      },
      {
        id: "6",
        amount: 200.05,
        name: "Auto Loan",
        date: new Date(),
        avatar: "buzz-marketing-group",
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
