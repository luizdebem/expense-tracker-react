import React from 'react';
import { currencyFormat } from '../helpers/helpers'; 

export const Transaction = ({ transaction }) => { // Desestruturação é do caralho
  const sign = transaction.amount < 0 ? '-' : '+';
  
  return (
    <li className={sign === '-' ? 'minus' : 'plus'}>
      {transaction.text} <span>{currencyFormat(Math.abs(transaction.amount))}</span><button className="delete-btn">x</button>
    </li>
  )
}
