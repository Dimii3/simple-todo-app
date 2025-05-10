import { useState } from "react";
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
  const [todos, setTodos] = useState<Todo[]>(dummyTodos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // DERIVED STATE
  const completedTasks = todos.filter((todo) => todo.completed);
  const amountOfTodos = todos.length || 0;
  const amountOfCompletedTodos =
    todos.filter((todo) => todo.completed).length || 0;

  const onDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const onEdit = (id: number) => {
    const foundTask = todos.find((todo) => todo.id === id);
    console.log("Editing task:", foundTask);
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
      <main className="w-[1200px] h-[800px] bg-white rounded-4xl shadow-xl shadow-gray-200 overflow-hidden grid grid-cols-[25%_1fr_1fr] grid-rows-[80px_1fr_1fr]">
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
        <Todos
          todos={todos}
          onDelete={onDelete}
          onDone={onDone}
          onEdit={onEdit}
        ></Todos>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
