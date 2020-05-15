import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    { id: 1, text: 'iPhone SE', amount: -3800 },
    { id: 2, text: 'Salary', amount: 1500 },
    { id: 3, text: 'Skin do lol', amount: -5700 },
    { id: 4, text: 'Câmera', amount: -1300 }
  ]
}

export const GlobalContext = createContext(initialState); // até aí tudo bem

// Provider (!)
// essa porra vai englobar os componentes que eu quero (children)
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions
    }}>
      {children}
    </GlobalContext.Provider>)
}