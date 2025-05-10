import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Todos from "./components/Todos";
import { dummyTodos } from "./lib/consts.ts";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
    return dummyTodos;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // DERIVED STATE
  const tasks = todos.filter((todo) => !todo.completed);

  const completedTasks = todos.filter((todo) => todo.completed);
  const amountOfTodos = tasks.length || 0;
  const amountOfCompletedTodos =
    todos.filter((todo) => todo.completed).length || 0;

  // EFFECTS
  // Close modal when clicking outside of it
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // HANDLERS
  const onDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onDone = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onAdd = (text: string) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };
  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <main className="w-[100vw] h-[100vh] grid-cols-[1fr_1fr]  md:grid-cols-[40%_1fr_1fr] bg-white  shadow-xl shadow-gray-200 overflow-hidden grid xl:grid-cols-[25%_1fr_1fr] grid-rows-[80px_1fr_1fr] xl:h-[800px] xl:w-[1200px] xl:rounded-4xl">
        <Navbar
          amountOfTodos={amountOfTodos}
          amountOfCompletedTodos={amountOfCompletedTodos}
        ></Navbar>
        <Sidebar
          onOpenModal={onOpenModal}
          onCloseModal={onCloseModal}
          isModalOpen={isModalOpen}
          completedTasks={completedTasks}
          onAdd={onAdd}
        ></Sidebar>
        <Todos todos={tasks} onDelete={onDelete} onDone={onDone}></Todos>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
