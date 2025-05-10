import { createPortal } from "react-dom";
import { motion } from "framer-motion";

type DeletedTasksModalProps = {
  onCloseModal: () => void;
  completedTasks: { id: number; text: string; completed: boolean }[];
};

export default function DeletedTasksModal({
  onCloseModal,
  completedTasks,
}: DeletedTasksModalProps) {
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onCloseModal}
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[400px] h-[400px] rounded-2xl shadow-2xl p-8 flex flex-col items-center  gap-8 overflow-scroll"
      >
        <h2 className="font-semibold text-xl">Completed Tasks</h2>
        <ul className="flex flex-col gap-4 w-full">
          {completedTasks.length === 0 ? (
            <p>No completed tasks</p>
          ) : (
            completedTasks.map((task) => (
              <li key={task.id} className="bg-[#F9F9F9] py-4 px-8 rounded-2xl">
                {task.text}
              </li>
            ))
          )}
        </ul>
      </div>
    </motion.div>,
    document.body
  );
}
