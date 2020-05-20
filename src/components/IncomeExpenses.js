import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { currencyFormat } from '../helpers/helpers'; 

export const IncomeExpenses = () => {
  const { transactions, loading } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);
    
  const expense = Math.abs(amounts.filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0));

  return (
    <div className={loading ? 'inc-exp-container loading' : 'inc-exp-container'}>
      <div>
        <h4>Income</h4>
        <p className="money plus">{currencyFormat(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{currencyFormat(expense)}</p>
      </div>
    </div>
  )
}
