// Import this if your are using react-bootstrap library
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;