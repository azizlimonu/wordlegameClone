import Keyboard from "./components/Keyboard";
import Board from "./components/Board";
import { createContext, useEffect, useState } from "react";
import { boardDefault, getRandomWord } from "./Words";
import './App.css';
import { ListKata } from "./ListKata";
import GameOver from "./components/GameOver";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [correctWord, setCorrectWord] = useState("");
  const [wordSet, setWordSet] = useState([]);
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [currAttempt, setCurrAttempt] = useState({
    attempt: 0,
    letterPost: 0
  });
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  let { theWord, todaysWord } = getRandomWord()

  // const correctWord = 'MEMEK'

  // get random word
  useEffect(() => {
    setWordSet(theWord);
    setCorrectWord(todaysWord);
    console.log(todaysWord);
  }, [])

  // function that we will return to other components
  const onEnter = () => {
    // bcuz we cant press enter before its reach the last letterpost
    if (currAttempt.letterPost !== 5) return;

    // currword is the word in the row
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    // only guess the existing words
    if (wordSet.includes(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
      // console.log("ok")
    } else {
      alert("Word not found");
      // console.log(wordSet)
      // console.log(currWord)
    }

    // the game ended logic
    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    // if theres no attempt and theres no correct word
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }

    // move vertically bcuz after press enter we move to another row below
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPost: 0 })
  }

  const onDelete = () => {
    // bcuz there no letter in first word
    if (currAttempt.letterPost === 0) return;
    // logic delete words backwards
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPost - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPost: currAttempt.letterPost - 1 });

  }

  const onSelectLetter = (key) => {
    if (currAttempt.letterPost > 4) return;
    // bcuz theres nothing to do, theres just have 4 col on 1 row of words

    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPost] = key;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPost: currAttempt.letterPost + 1 })
  }

  // const isWordValid = (word) => {
  //   return (
  //     ListKata.includes(word.toLowerCase())
  //   )
  // }


  return (
    <>
      <div className="App">
        <nav>
          <h1>Wordle</h1>
        </nav>

        <AppContext.Provider value={{
          board, setBoard, currAttempt, setCurrAttempt, onDelete, onEnter, onSelectLetter, setDisabledLetters,
          getRandomWord, correctWord, disabledLetters, gameOver, setGameOver,
        }}>
          <div className="game">
            <Board />
            {gameOver.gameOver ? <GameOver /> : < Keyboard />}
          </div>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
