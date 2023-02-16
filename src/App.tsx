import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

export function App() {
  return (
    <div className="root bg-white dark:bg-stone-900 h-screen w-screen dark:text-white p-5">
      <Header />
      <main>
        <TodoList />
      </main>
    </div>
  );
}
