import { AnimatePresence } from "motion/react";
import type { Todo } from "../App";
import TaskItem from "./TaskItem";

type TodosProps = {
  todos: Todo[];
  onDelete: (id: number) => void;

  onDone: (id: number) => void;
};

export default function Todos({ todos, onDelete, onDone }: TodosProps) {
  return (
    <section className="bg-white row-span-2 col-span-2 p-8 overflow-scroll">
      <AnimatePresence>
        <ul className="flex flex-col gap-4">
          {todos.map((todo) => (
            <TaskItem
              id={todo.id}
              onDelete={onDelete}
              onDone={onDone}
              key={todo.id}
              title={todo.text}
            ></TaskItem>
          ))}
        </ul>
      </AnimatePresence>
    </section>
  );
}
