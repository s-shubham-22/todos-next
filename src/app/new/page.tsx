import { prisma } from '@/db';
import {redirect} from 'next/navigation'
import Link from 'next/link';

const createTodo = async (data: FormData) => {
  "use server"

  const title = data.get('title')?.valueOf()
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Invalid Title')
  }

  await prisma.todo.create({
    data: {
      title,
    },
  })

  redirect('/')
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form
        action={createTodo}
        className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input
          className="border border-slate-300 rounded bg-transparent outline-none
          focus-within:border-slate-100 px-2 py-1"
          type="text"
          id="title"
          name="title"
          placeholder="Title"
        />
        <div className="flex gap-1 justify-end">
          <button
            className="border border-slate-300 rounded px-2 py-1
          hover:bg-slate-700 hover:text-slate-100"
            type="submit"
          >
            Create
          </button>
          <Link
            href='..'
            className='border border-slate-300 rounded px-2 py-1
          hover:bg-slate-700 hover:text-slate-100'
          >Cancel</Link>
        </div>
      </form>
    </>
  );
}