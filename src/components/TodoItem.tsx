'use client'

type TodoItemProps = {
  id: string;
  title: string;
  done: boolean;
  toggleDone: (id: string, done: boolean) => void;
  deleteTodo: (id: string) => void;
}

export const TodoItem = ({
  id, title, done, toggleDone, deleteTodo
}: TodoItemProps) => {
  return (
    <li
      className='flex justify-between items-center py-2 border-b border-slate-300'
    >
      <div
        className="flex gap-1 items-center"
      >
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={done}
          onChange={(e) => toggleDone(id, e.target.checked)}
          />
        <label
          className="cursor-pointer peer-checked:line-through
          peer-checked:text-slate-400"
          htmlFor={id}
          >{title}</label>
      </div>
      <div>
        {/* // Delete Button */}
        <button
          className="border border-slate-300 rounded px-2 py-1
          hover:bg-slate-700 hover:text-slate-100"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}