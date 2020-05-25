// AppReducer: ações que modificam o state
export default (state, action) => {
  switch (action.type) {
    case 'START_LOADER':
      return {
        ...state,
        loading: true
      }
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        loading: false,
        transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        loading: false,
        transactions: [...state.transactions, action.payload]
      }
    case 'EDIT_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        loading: false
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}