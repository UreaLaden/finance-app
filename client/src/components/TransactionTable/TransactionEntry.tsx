import { iTransactionEntryProps } from "@/utils/models";
import { FC, useMemo } from "react";
import { TransactionEntryContainer } from "./Transaction.component";
import { toCurrency, toFormattedDate } from "@/utils/helpers/helpers";
import { AvatarRegistry } from "@/utils/helpers/avatarRegistry";

export const TransactionEntry: FC<iTransactionEntryProps> = ({ transaction }) => {

    const Amount = useMemo(() => {
        const value = toCurrency(transaction.amount)
        return transaction.amount < 0 ? `${value}` : `+${value}`
    }, [transaction.amount])

    const currencyId = useMemo(() => {
        return transaction.amount < 0 ? 'debit' : 'credit'
    }, [transaction, transaction.amount])

    const Avatar = useMemo(() => AvatarRegistry[transaction.avatar], [transaction.avatar])

    return (
        <TransactionEntryContainer className={'transaction-entry-container'}>
            <div className={'transaction-entry-display'}>
                <div className={'transaction-entry-avatar'}>
                    <img src={Avatar} alt={`${transaction.name} avatar image`} />
                </div>
                <div className={'transaction-entry-name'}>{transaction.name}</div>
            </div>
            <div className={'transaction-entry-details'}>
                <div className={'transaction-entry-amount'} id={currencyId}>{Amount}</div>
                <div className={'transaction-entry-date'}>{toFormattedDate(transaction.date)}</div>
            </div>
        </TransactionEntryContainer>
    )
}