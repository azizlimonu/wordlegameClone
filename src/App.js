import Keyboard from "./components/Keyboard";
import Board from "./components/Board";
import { createContext, useState } from "react";
import { boardDefault } from "./Words";
import './App.css';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault)
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPost: 0 })

  // function that we will return to other components
  const onEnter = () => {
    if (currAttempt.letterPost !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    // bcuz we cant press enter before its reach the last letterpost
    if (currAttempt.letterPost !== 5) return;
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

  return (
    <>
      <div className="App">
        <nav>
          <h1>Wordle</h1>
        </nav>

        <AppContext.Provider value={{
          board, setBoard, currAttempt, setCurrAttempt, onDelete, onEnter, onSelectLetter
        }}>
          <div className="game">
            <Board />
            <Keyboard />
          </div>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
