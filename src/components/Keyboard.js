import React, { useEffect, useCallback, useContext } from 'react'
import Key from './Key';
import { AppContext } from "../App";

const Keyboard = () => {
  const keyboard1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keyboard2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keyboard3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {
    board,
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);

  // prevent re-updating compononent/function necessery
  const handleKeyboard = useCallback(
    (event) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
        // if not of these 2 then we will put some function to the A-z key element
      } else {
        keyboard1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keyboard2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keyboard3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt],
  )


  // put some logic funtion with event if theres keydown 
  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);

    return () => {
      document.removeEventListener('keydown', handleKeyboard);

    }
  }, [handleKeyboard]);

  return (
    <div className="keyboard"
      onKeyDown={handleKeyboard}
    >
      <div className="line1">
        {keyboard1.map((key) => {
          return (
            <Key keyVal={key} key={key}
            disabled={disabledLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="line2">
        {keyboard2.map((key) => {
          return (
            <Key keyVal={key} key={key}
            disabled={disabledLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {keyboard3.map((key) => {
          return (
            <Key keyVal={key} key={key}
            disabled={disabledLetters.includes(key)}
            />
          );
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  )
}

export default Keyboard