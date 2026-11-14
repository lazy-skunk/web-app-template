import { useState } from "react";

import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [previewState, setPreviewState] = useState("empty");
  const textInvalid = text.length > 20;

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col gap-6 p-6">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-lg font-bold">
          <a href="#">web-app-template</a>
        </h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://www.google.com/"
                target="_blank"
                className="visited:text-purple-500 hover:underline"
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

      <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-4">
        <div className="bg-foreground/3 grid gap-2 rounded p-4">
          <label htmlFor="text" className="font-semibold">
            Textbox
          </label>
          <p className="text-foreground/50">Use up to 20 characters.</p>
          <input
            id="text"
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter text"
            className="bg-foreground/3 hover:bg-foreground/6 rounded p-2 motion-safe:transition-colors"
          />
          <div role="alert" className="empty:absolute">
            {textInvalid && (
              <p className="text-red-500 motion-safe:transition-opacity motion-safe:starting:opacity-0">
                Use 20 characters or fewer.
              </p>
            )}
          </div>
          {!textInvalid && text && <p className="text-foreground/50">{text}</p>}
        </div>

        <div className="bg-foreground/3 flex flex-col gap-4 rounded p-4">
          <div className="grid gap-2">
            <h2 className="font-semibold">Buttons</h2>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="cursor-pointer rounded bg-green-100 px-4 py-2 text-green-900 motion-safe:transition motion-safe:active:translate-y-px dark:bg-green-900 dark:text-green-100"
                onClick={() => setCount((count) => count + 1)}
              >
                Add React icon
              </button>

              <button
                type="button"
                disabled={count === 0}
                className="disabled:bg-foreground/3 disabled:text-foreground/50 dark:disabled:bg-foreground/3 dark:disabled:text-foreground/50 cursor-pointer rounded bg-red-100 px-4 py-2 text-red-900 disabled:cursor-not-allowed disabled:active:translate-y-0 motion-safe:transition motion-safe:active:translate-y-px dark:bg-red-900 dark:text-red-100"
                onClick={() => setCount(0)}
              >
                Reset
              </button>
            </div>
          </div>

          <p role="status">Count: {count}</p>

          {count > 0 && (
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: count }, (_, index) => (
                <img
                  key={index}
                  src={reactLogo}
                  alt=""
                  className="size-8 motion-safe:transition motion-safe:starting:opacity-0"
                />
              ))}
            </div>
          )}
        </div>

        <section className="bg-foreground/3 grid gap-2 rounded p-4">
          <label htmlFor="preview-state" className="font-semibold">
            Pulldown
          </label>
          <select
            id="preview-state"
            value={previewState}
            onChange={(event) => setPreviewState(event.target.value)}
            className="bg-foreground/3 hover:bg-foreground/6 rounded p-2 motion-safe:transition-colors"
          >
            {["empty", "loading", "success", "error"].map((state) => (
              <option key={state} value={state} className="bg-background text-foreground">
                {state}
              </option>
            ))}
          </select>
          <div role="status">
            <div
              key={previewState}
              className="motion-safe:transition-opacity motion-safe:starting:opacity-0"
            >
              {previewState === "empty" && <p className="text-foreground/50">No items yet.</p>}
              {previewState === "loading" && (
                <p className="text-foreground/50 flex items-center gap-2">
                  <span className="size-4 rounded-full border-2 border-current border-t-transparent motion-safe:animate-spin" />
                  Loading…
                </p>
              )}
              {previewState === "success" && <p className="text-green-500">Success.</p>}
              {previewState === "error" && <p className="text-red-500">Error.</p>}
            </div>
          </div>
        </section>

        <section className="bg-foreground/3 grid gap-2 rounded p-4">
          <h2 className="font-semibold">Table</h2>
          <div className="overflow-x-auto rounded">
            <table className="bg-foreground/3 w-full border-collapse text-left">
              <thead className="bg-foreground/3">
                <tr>
                  <th scope="col" className="p-2 font-semibold">
                    Column 1
                  </th>
                  <th scope="col" className="p-2 font-semibold">
                    Column 2
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((row) => (
                  <tr
                    key={row}
                    className="even:bg-foreground/3 hover:bg-foreground/6 motion-safe:transition-colors"
                  >
                    <td className="p-2">Value {row * 2 - 1}</td>
                    <td className="p-2">Value {row * 2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
