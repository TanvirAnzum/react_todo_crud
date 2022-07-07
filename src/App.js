import { useState } from "react";
import "./App.css";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  const newTodo = {
    id: Date.now(),
    title: todoTitle,
  };

  const getInput = (event) => {
    setTodoTitle(event.target.value);
  };

  const createList = () => {
    setTodoList([newTodo, ...todoList]);
    setTodoTitle("");
  };

  const editList = (id) => {
    let toBeEdited = todoList.find((todo) => todo.id === id);
    setTodoTitle(toBeEdited.title);
    setIsEditable(true);
    setEditableTodo(toBeEdited);
    setTodoTitle(toBeEdited.title);
  };

  const updateList = () => {
    editableTodo.title = todoTitle;
    setTodoTitle("");
    setIsEditable(false);
    setEditableTodo(null);
  };

  const deleteList = (id) => {
    let filteredList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredList);
  };

  return (
    <div className="App">
      <h1>TODO List with CRUD</h1>
      <form action="" className="Form">
        <input
          type="text"
          name="input"
          id="input"
          value={todoTitle}
          placeholder="New Task"
          onChange={(event) => {
            getInput(event);
          }}
        />
        <button
          className="submitBtn"
          onClick={(e) => {
            e.preventDefault();
            isEditable ? updateList() : createList();
          }}
        >
          {isEditable ? "Edit Task" : "Create Task"}
        </button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li>
            <p>{todo.title}</p>
            <button
              onClick={() => {
                editList(todo.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteList(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
