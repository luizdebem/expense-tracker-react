import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const generateId = () => {
    return Math.floor(Math.random() * 100000);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: generateId(),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>

      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter transaction's description"></input>
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount<br/>(negative - expense, positive - income)</label>
          <input type="tel" onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount"></input>
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
