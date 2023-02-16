import { useState } from "react";
import { TodoEntry, TodoListElement } from "./TodoEntry";

const exampleTodo: TodoListElement = {
  name: "I want to finish this app...",
  isDone: false,
  colorClass: "text-rose-500",
  dateAdded: new Date(1676647592157),
};

export function TodoList() {
  const [todoList, setTodoList] = useState<TodoListElement[]>([exampleTodo]);
  return (
    <ul>
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <TodoEntry key={todo.dateAdded.toISOString()} todo={todo} />
        ))
      ) : (
        <span> Nothing to do today! 🎉 </span>
      )}
    </ul>
  );
}
