import { useState } from "react";

export interface TodoListElement {
  name: string;
  isDone: boolean;
  colorClass: string;
  dateAdded: Date;
  dateStarted?: Date;
  dateFinished?: Date;
}

interface TodoEntryProps {
  todo: TodoListElement;
}

export function TodoEntry({ todo }: TodoEntryProps) {
  const [isTodoDone, setIsTodoDone] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <li>
      <input
        type="checkbox"
        className="mr-1"
        checked={isTodoDone}
        onChange={() => setIsTodoDone(!isTodoDone)}
      />
      <span className={isActive ? todo.colorClass : ""}>{todo.name}</span>
      <button
        onClick={() => setIsActive(!isActive)}
        className="hover:ring-rose-500 hover:ring-1 ring-offset-0"
      >
        {isActive ? "⏹️" : "▶️"}
      </button>
    </li>
  );
}
