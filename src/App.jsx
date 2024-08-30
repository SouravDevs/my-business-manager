import { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";
import { data } from "./Database/Data";

function App() {
  const [database, setDatabase] = useState(data);
  console.log(data)

  return (
    <>
      <TodoForm setDatabase={setDatabase} />
      <TodoList database={database} />
    </>
  );
}

export default App;
