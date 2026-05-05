import { useSignal, useComputed, useSignalEffect } from "@preact/signals-react";

export default function Counter() {
  const count = useSignal(0);
  const double = useComputed(() => count.value * 2);

  useSignalEffect(() => {
    console.log(`Value: ${count.value}, value x 2 = ${double.value}`);
  });

  return (
    <button onClick={() => count.value++}>
      Value: {count.value}, value x 2 = {double.value}
    </button>
  );
}
