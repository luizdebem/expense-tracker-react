import React from 'react'
import PriorityHighOutlinedIcon from '@material-ui/icons/PriorityHighOutlined';

export const NoTransactions = () => {
  return (
    <div className="no-transactions">
      <PriorityHighOutlinedIcon/>
      <span>No transactions. Add one below!</span>
    </div>
  )
}
