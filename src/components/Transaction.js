import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { currencyFormat } from '../helpers/helpers'; 

export const Transaction = ({ transaction }) => { // Desestruturação é do caralho
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  
  return (
    <li className={sign === '-' ? 'minus' : 'plus'}>
      {transaction.text} <span>{currencyFormat(Math.abs(transaction.amount))}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
