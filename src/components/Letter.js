import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

const Letter = ({ letterPost, attemptValue }) => {
  const {board} = useContext(AppContext);

  const letter = board[attemptValue][letterPost];
  
  return (
    <div className='letter'>
      {letter}
    </div>
  )
}

export default Letter