import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { currencyFormat } from '../helpers/helpers';

export const Transaction = ({ transaction }) => { // Desestruturação é do caralho
  const { deleteTransaction, editTransaction } = useContext(GlobalContext);

  const [detailsToggle, setToggle] = useState(false);

  const [text, setText] = useState(transaction.text);
  const [amount, setAmount] = useState(transaction.amount);

  const sign = transaction.amount < 0 ? '-' : '+';

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transaction._id,
      text,
      amount: +amount
    }
    editTransaction(newTransaction.id, newTransaction);
  }

  return (
    <>
      <li onClick={() => setToggle(!detailsToggle)} className={sign === '-' ? 'minus' : 'plus'}>
        {transaction.text} <span>{currencyFormat(Math.abs(transaction.amount))}</span>
      </li>

      <div className={detailsToggle ? 'form-edit' : 'hidden'}>
        <form onSubmit={onSubmit}>
          <label htmlFor="text">New description</label>
          <input type="text" defaultValue={transaction.text} onChange={(e) => setText(e.target.value)} placeholder="Enter transaction's description"></input>

          <label htmlFor="amount">New amount<br />(negative - expense, positive - income)</label>
          <input type="tel" step="any" defaultValue={transaction.amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount"></input>

          <button type="submit" className="btn">Update transaction</button>
          <button onClick={() => deleteTransaction(transaction._id)} className="btn delete">Delete transaction</button>
        </form>
      </div>
    </>
  )
}
