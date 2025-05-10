type TaskItemProps = {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
  onEdit: (id: number) => void;
};

export default function TaskItem({
  title,
  onDelete,
  onDone,
  onEdit,
  id,
}: TaskItemProps) {
  return (
    <li className="bg-[#F9F9F9] py-4 px-8 rounded-2xl flex justify-between items-center">
      {title}
      <div className="flex gap-8">
        <button onClick={() => onDone(id)} className="py-2 px-4 cursor-pointer">
          Done
        </button>
        <button onClick={() => onEdit(id)} className="py-2 px-4 cursor-pointer">
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-400 py-2 px-4 rounded-2xl text-white cursor-pointer hover:bg-red-500 transition duration-200 ease-in-out"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
