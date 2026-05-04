import { useState } from "preact/hooks";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      class="counter"
      onClick={() => setCount((count) => count + 1)}
    >
      Count is {count}
    </button>
  );
}
