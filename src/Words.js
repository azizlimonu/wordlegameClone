import { ListKata } from "./ListKata";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
]


// get random word from list kata
export const getRandomWord = () => {
  const index = Math.floor(Math.random()*ListKata.length);
  const todaysWord = ListKata[index].toUpperCase()
  let theWord = ListKata
  return { theWord, todaysWord }
};