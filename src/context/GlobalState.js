import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  transactions: [],
  error: null,
  loading: true
}

export const GlobalContext = createContext(initialState); // até aí tudo bem

// Provider (!)
// essa porra vai englobar os componentes que eu quero (children)
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const startLoader = () => {
    dispatch({
      type: 'START_LOADER',
      payload: null
    });
  }

  // ACTIONS
  const getTransactions = async () => {
    try {
      startLoader();
      const res = await axios.get('/api/v1/transactions');

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
    }
  }

  const deleteTransaction = async (id) => {
    try {
      startLoader();
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
    }
  }

  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      startLoader();
      const res = await axios.post('/api/v1/transactions', transaction, config);
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
    }
  }

  const editTransaction = async (id, newTransaction) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      startLoader();
      const res = await axios.patch(`/api/v1/transactions/${id}`, newTransaction, config);
      dispatch({
        type: 'EDIT_TRANSACTION',
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
    }
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions, error: state.error, loading: state.loading, getTransactions, deleteTransaction, addTransaction, editTransaction
    }}>
      {children}
    </GlobalContext.Provider>)
}