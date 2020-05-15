import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { currencyFormat } from '../helpers/helpers'; 

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  const sign = total < 0 ? '-' : '+';

  return (
    <div>
      <h4>Your Balance:</h4>
      <h1>{sign}{currencyFormat(Math.abs(total))}</h1>
    </div>
  )
}
