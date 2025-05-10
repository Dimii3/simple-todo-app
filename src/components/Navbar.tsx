export default function Navbar({
  // amountOfCompletedTodos,
  amountOfTodos,
}: {
  amountOfCompletedTodos: number;
  amountOfTodos: number;
}) {
  return (
    <nav className="bg-[#262626] text-white col-span-3 row-span-1 flex items-center justify-between flex-row px-[32px]">
      <h1 className="text-2xl font-bold ">Notless.</h1>
      <div className="flex flex-row gap-[16px]">
        <p>{amountOfTodos}</p>
        <p>Active tasks</p>
      </div>
    </nav>
  );
}
