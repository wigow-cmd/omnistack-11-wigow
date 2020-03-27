import React from "react";

import "./global.css";

import Routes from "./routes";

//JSX (JavaScript XML -> HTML dentro do java)
/**
 * counter = valor , setCounter = valor que sobrepõe o valor do counter
 * usar estado -> useState(0) no lugar de uma variável quando for ser alterada sem recarregar a tela
 *
 * const [counter, setCounter] = useState(0);
 * function increment() {
 *  setCounter(counter + 1);
 * }
 *
 * <button onClick={increment}>Incrementar</button>
 */

function App() {
  return <Routes />;
}

export default App;
