import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-gray-100">
      <header className="flex items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold">
          web-app-template
        </a>
        <nav>
          <ul className="flex gap-4 text-sm">
            <li>
              <a
                href="https://www.google.com/"
                target="_blank"
                className="hover:underline visited:text-purple-500"
              >
                Google
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dummy
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
        <div className="w-full max-w-sm">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            aria-describedby={name ? "name-message" : undefined}
            className="w-full rounded bg-gray-800 px-3 py-2 placeholder:text-gray-500"
          />
          {name && (
            <p id="name-message" className="mt-2 text-sm text-gray-500">
              Hello, {name}!
            </p>
          )}
        </div>

        <div className="w-full max-w-sm">
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded bg-gray-800 px-3 py-2"
          >
            <option value="" disabled hidden>
              Select a category
            </option>
            <option value="Option1">Option1</option>
            <option value="Option2">Option2</option>
            <option value="Option3">Option3</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="rounded px-4 py-2 text-sm font-medium bg-green-900 text-green-100 hover:bg-green-900/75 active:translate-y-px active:bg-green-900/50"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
          <button
            type="button"
            disabled={count === 0}
            className={`rounded px-4 py-2 text-sm font-medium bg-red-900 text-red-100 hover:bg-red-900/75 active:translate-y-px active:bg-red-900/50
              disabled:cursor-not-allowed disabled:bg-gray-800/50 disabled:text-gray-500/50 disabled:active:translate-y-0
            `}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        <div className="flex max-w-lg flex-wrap justify-center gap-2">
          {Array.from({ length: count }, (_, index) => (
            <img key={index} src={reactLogo} alt="" className="size-8" />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
