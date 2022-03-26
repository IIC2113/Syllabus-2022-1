import { useState } from "react";
import { List } from "./List";

export function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, inputText]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = (e) => {
    const index = e.target.getAttribute("index");
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <List tasks={tasks} handleClick={handleClick} />
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleChange} />
        <button type="submit">Agregar a la lista</button>
      </form>
    </div>
  );
}
