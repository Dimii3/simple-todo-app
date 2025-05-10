import React, { useEffect } from "react";
import Button from "./Button";
import DeletedTasksModal from "./DeletedTasksModal";
import { AnimatePresence } from "motion/react";

type SidebarProps = {
  onAdd: (text: string) => void;
  isModalOpen: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
  completedTasks: { id: number; text: string; completed: boolean }[];
};

export default function Sidebar({
  onAdd,
  isModalOpen,
  onCloseModal,
  onOpenModal,
  completedTasks,
}: SidebarProps) {
  const [task, setTask] = React.useState("");
  const [validationError, setValidationError] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/[<>]/g, "");
    setTask(sanitizedValue);
  };
  const handleAddTask = () => {
    if (task.trim() === "") {
      setValidationError(true);
      return;
    }
    setValidationError(false);
    onAdd(task);
    setTask("");
  };

  useEffect(() => {
    const handleDownKey = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleAddTask();
      }
    };
    window.addEventListener("keydown", handleDownKey);
    return () => {
      window.removeEventListener("keydown", handleDownKey);
    };
  });

  return (
    <aside className="bg-[#F9F9F9] row-span-1 col-span-2 px-[32px] py-[32px] flex flex-col gap-[32px] md:row-span-2 md:col-span-1 ">
      <input
        onChange={handleInputChange}
        placeholder="Add a new task"
        className="py-4 px-8 border-[#262626] border-1 rounded-2xl mb-8"
        type="text"
        value={task}
      />
      {validationError && (
        <p className="text-red-500 text-sm">Task cannot be empty</p>
      )}
      <Button onClick={handleAddTask} type="primary">
        Add Task
      </Button>
      <Button onClick={onOpenModal} type="secondary">
        Completed Tasks
      </Button>
      <AnimatePresence>
        {isModalOpen && (
          <DeletedTasksModal
            key="modal"
            onCloseModal={onCloseModal}
            completedTasks={completedTasks}
          />
        )}
      </AnimatePresence>
    </aside>
  );
}
