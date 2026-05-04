import { computed, signal } from "@preact/signals-react";

// https://github.com/preactjs/signals/tree/main/packages/react

/**
 * Enabling Automatic Re-renders
 * By default, React components may not automatically re-render when a signal's .value changes unless you explicitly track it.
 * Option A: Babel Transform `pnpm add -D @preact/signals-react-transform`
 * Option B: Manual Tracking Hook `useSignals()`
 */

// 1. Create a signal (can be outside the component)
const count = signal(0);

// 2. Derive state with computed
const double = computed(() => count.value * 2);

export default function CounterValue() {
  return (
    <div>
      {/* 3. Access value with .value */}
      <p>Count: {count.value}</p>
      <p>Double: {double.value}</p>

      {/* 4. Update value directly */}
      <button onClick={() => count.value--}>Decrement</button>
      <button onClick={() => count.value++}>Increment</button>
    </div>
  );
}
