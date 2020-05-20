import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { currencyFormat } from '../helpers/helpers'; 

export const Balance = () => {
  const { transactions, loading } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  const isPositive = total >= 0;
  const sign = isPositive ? null : '-';

  return (
    <div className={loading ? 'your-balance loading' : 'your-balance'}>
      <h4>Your Balance:</h4>
      <h1 className={isPositive ? 'plus' : 'minus'}>{sign} {currencyFormat(Math.abs(total))}</h1>
    </div>
  )
}
