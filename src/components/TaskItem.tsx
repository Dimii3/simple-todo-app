import { motion } from "framer-motion";

type TaskItemProps = {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
};

export default function TaskItem({
  title,
  onDelete,
  onDone,
  id,
}: TaskItemProps) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-[#F9F9F9] py-4 px-8 rounded-2xl flex justify-between items-center break-all lg:break-normal"
    >
      {title}
      <div className="flex-col justify-center items-center flex md:flex-row gap-8">
        <button
          onClick={() => onDone(id)}
          className="py-2 px-4 cursor-pointer break-normal"
        >
          Done
        </button>

        <button
          onClick={() => onDelete(id)}
          className="bg-red-400 py-2 px-4 rounded-2xl text-white cursor-pointer hover:bg-red-500 transition duration-200 ease-in-out break-normal"
        >
          Delete
        </button>
      </div>
    </motion.li>
  );
}
