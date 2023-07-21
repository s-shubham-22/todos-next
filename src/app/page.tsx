import { prisma } from '@/db';
import { TodoItem } from '@/components/TodoItem';
import Link from 'next/link';

const getTodos = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
}

const toggleDone = async (id: string, done: boolean) => {
  'use server'
  const todo = await prisma.todo.update({
    where: { id },
    data: { done }
  });
  return todo;
}

const deleteTodo = async (id: string) => {
  'use server'
  const todo = await prisma.todo.delete({
    where: { id }
  });
  return todo;
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header
        className='flex justify-between items-center mb-4'
      >
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 rounded px-2 py-1
          hover:bg-slate-700 hover:text-slate-100"
          href="/new">
          New
        </Link>
      </header>
      <ul className='px-4 font-semibold'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleDone={toggleDone}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}