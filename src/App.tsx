import { useState } from "react";

function App() {

  const [list, setList] = useState<string[]>([]);

  const [task, setTask] = useState('');

  const addTask = () => {
    setList([...list, task]);
    setTask('');
  }

  return (
    <>
      <nav
        className="flex py-2 px-4 md:px-8 bg-white border-b border-slate-300 min-h-[68px] relative z-20"
        aria-label="Main navigation">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 w-full">
          {/* <a href="#"
         className="min-w-9 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
         <span className="sr-only">Your Company</span>
         <img src="https://readymadeui.com/logo-alt.svg" alt="readymadeui logo" className="h-9 w-auto" />
      </a> */}
          <h1>My TO-Do List</h1>

          <div id="collapseMenu"
            className="hidden lg:block max-lg:bg-white max-lg:border-l max-lg:border-slate-300 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none">

            <div
              className="py-2 px-4 flex justify-between items-center border-b border-slate-300 sticky top-0 bg-white lg:hidden max-lg:min-h-[68px]">
              <a href="#"
                className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                <span className="sr-only">Your Company</span>
                <img src="https://readymadeui.com/logo-alt.svg" alt="readymadeui logo dialog" className="h-9 w-auto" />
              </a>
              <button type="button" aria-controls="collapseMenu" id="toggleClose"
                className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                <span className="sr-only">Close main menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 fill-slate-900"
                  aria-hidden="true" viewBox="0 0 329.269 329">
                  <path
                    d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                    data-original="#000000" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-8 font-semibold text-sm text-slate-900 lg:flex-row max-lg:p-6">
              <li>
                <a href="#"
                  className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  aria-current="page">Home</a>
              </li>
              <li>
                <a href="#"
                  className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Features</a>
              </li>
              <li>
                <a href="#"
                  className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Blog</a>
              </li>
              <li>
                <a href="#"
                  className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">About</a>
              </li>
              <li>
                <a href="#"
                  className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Contact</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <a href="#"
              className="text-slate-900 text-sm font-semibold hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Log
              in</a>
            <a href="#"
              className="py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Sign
              up</a>

            <button type="button" aria-controls="collapseMenu" aria-expanded="false" aria-haspopup="true" id="toggleOpen"
              className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              <span className="sr-only">Open main menu</span>
              <svg className="size-7 fill-slate-900" aria-hidden="true" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">

              </svg>
            </button>
          </div>
        </div>
      </nav>


      <div className="px-4 md:px-8 my-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <label htmlFor="full-name-small" className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block ">Enter your task</label>
            <input type="text" id="full-name-small" placeholder="John Smith" value={task} onChange={(e) => setTask(e.target.value)}
              className="px-2.5 py-2 text-sm text-slate-900 dark:text-slate-50 rounded-md bg-white dark:bg-neutral-800 w-full outline-1 -outline-offset-1 outline-slate-300 dark:outline-neutral-700 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
          </div>
          <button type="button" onClick={() => { addTask() }}
            className="px-3.5  text-white text-sm font-semibold cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            Add Task</button>
        </div>

        <div className="px-4 md:px-8 my-6">
          <div className="max-w-7xl mx-auto border border-slate-200 dark:border-neutral-700 rounded-md overflow-x-auto">
            <table className="w-full">
              <thead
                className="text-slate-900 dark:text-slate-50 text-left text-sm font-semibold border-b border-slate-300 dark:border-neutral-600 whitespace-nowrap">
                <tr className="bg-slate-50 dark:bg-neutral-800">
                  <th scope="col" className="px-4 py-3.5">Sr No.</th>
                  <th scope="col" className="px-4 py-3.5">Task</th>
                  <th scope="col" className="px-4 py-3.5">Actions</th>
                </tr>
              </thead>

              <tbody className="text-sm divide-y divide-slate-200 dark:divide-neutral-700">
                {list.map((item, index) => (
                  <tr className="hover:bg-slate-50 dark:hover:bg-neutral-800">
                    <td className="px-4 py-4 font-medium text-slate-900 dark:text-slate-50 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="px-4 py-4 text-slate-500 dark:text-slate-400">
                      {item}
                    </td>
                    <td className="px-4 py-4 flex gap-3">
                      <button type="button"
                        className="text-sm text-blue-700 dark:text-blue-500 cursor-pointer hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        aria-label="Edit John Doe">
                        Edit
                      </button>
                      <button type="button"
                        className="text-sm text-red-700 dark:text-red-500 cursor-pointer hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
                        aria-label="Delete John Doe">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
