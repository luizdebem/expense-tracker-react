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
        <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
      </li>

      <div className={detailsToggle ? 'list details' : 'hidden'}>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Description</label>
            <input type="text" defaultValue={transaction.text} onChange={(e) => setText(e.target.value)} placeholder="Enter transaction's description"></input>
          </div>

          <div className="form-control">
            <label htmlFor="amount">Amount<br />(negative - expense, positive - income)</label>
            <input type="number" defaultValue={transaction.amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount"></input>
          </div>

          <button className="btn">Add transaction</button>
        </form>
      </div>
    </>
  )
}
