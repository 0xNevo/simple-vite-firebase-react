import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { FormCheck } from "react-bootstrap";

import firebaseApp from "../shared/firebase";
import { Todo } from "../shared/types";

const TodoList = () => {
  const db = getDatabase(firebaseApp);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const todoRef = ref(db, "/todos");

    onValue(todoRef, (snapshot) => {
      const todos = snapshot.val();
      const newTodoList: Todo[] = [];

      for (let id in todos) {
        newTodoList.push({ id, ...todos[id] });
      }

      setTodoList(newTodoList);
    });
  }, [db]);

  const changeTodoCompletion = (todo: Todo) => {
    const todoRef = ref(db, "/todos/" + todo.id);
    update(todoRef, { done: !todo.done });
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((todo, index) => {
        return (
          <FormCheck
            key={index}
            checked={todo.done}
            onChange={() => changeTodoCompletion(todo)}
            label={todo.title}
          />
        );
      })}
    </div>
  );
};

export default TodoList;