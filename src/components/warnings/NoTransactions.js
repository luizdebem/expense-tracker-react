import React, { useContext } from 'react'
import PriorityHighOutlinedIcon from '@material-ui/icons/PriorityHighOutlined';
import ClipLoader from 'react-spinners/ClipLoader';

import { GlobalContext } from '../../context/GlobalState';

export const NoTransactions = () => {

  const { loading } = useContext(GlobalContext);

  return (
    <div className="no-transactions">
      {loading ?
        <ClipLoader css="margin: 0 auto" />
        :
        <>
          <PriorityHighOutlinedIcon />
          <span>No transactions. Add one below!</span>
        </>
      }
    </div>
  )
}
