import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

const Letter = ({ letterPost, attemptValue }) => {
  const { board, currAttempt, correctWord } = useContext(AppContext);
  // word that were input inside of the cell
  const letter = board[attemptValue][letterPost];

  const correct = correctWord.toUpperCase()[letterPost] === letter;

  // if the word isnt correct and cell is not empty and the word includes the correct words
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  // we see the class after he guess the word of the first row
  const letterClass = currAttempt.attempt > attemptValue && (correct ? "correct" : almost ? "almost" : "error")
  

  return (
    <div className='letter' id={letterClass}>
      {letter}
    </div>
  )
}

export default Letter