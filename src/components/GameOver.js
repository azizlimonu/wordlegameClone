import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);

  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Win, You Guess The Correct Word"
          : "You Failed."}
      </h3>
      <h1>Correct Word Is: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;
