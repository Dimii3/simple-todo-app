import type { Todo } from "../App";
import TaskItem from "./TaskItem";

type TodosProps = {
  todos: Todo[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onDone: (id: number) => void;
};

export default function Todos({ todos, onDelete, onDone, onEdit }: TodosProps) {
  return (
    <section className="bg-white row-span-2 col-span-2 p-8 overflow-scroll">
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <TaskItem
            id={todo.id}
            onDelete={onDelete}
            onDone={onDone}
            onEdit={onEdit}
            key={todo.id}
            title={todo.text}
          ></TaskItem>
        ))}
      </ul>
    </section>
  );
}
