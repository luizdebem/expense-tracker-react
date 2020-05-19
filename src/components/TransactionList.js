import React, { useContext, useEffect } from 'react'
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

import { NoTransactions } from './warnings/NoTransactions';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasTransactions = transactions.length > 0;
  
  const List = () => {
    return (
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    )
  }

  return (
    <>
      <h3>History</h3>
      {hasTransactions && <List/>}
      {!hasTransactions && <NoTransactions/>}
    </>
  )
}
