import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

const Letter = ({ letterPost, attemptValue }) => {
  const { board, currAttempt, correctWord, disabledLetters, setDisabledLetters } = useContext(AppContext);
  // word that were input inside of the cell
  const letter = board[attemptValue][letterPost];

  const correct = correctWord.toUpperCase()[letterPost] === letter;

  // if the word isnt correct and cell is not empty and the word includes the correct words
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  // we see the class after he guess the word of the first row
  const letterClass = currAttempt.attempt > attemptValue && (correct ? "correct" : almost ? "almost" : "error")

  // check for the disabled keyboard not on the grid, if match show green or not
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      // the disabled letters before and the current letter have been pres
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt])

  return (
    <div className='letter' id={letterClass.toString()}>
      {letter}
    </div>
  )
}

export default Letter