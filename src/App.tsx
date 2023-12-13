import { useState } from 'react';

type tCounter = {
  count: number;
  range: number;
};

export function App() {
  const [countState, setCount] = useState<tCounter>({ count: 0, range: 1 });
  const updateRange = (value: number) => {
    setCount((prev) => ({ ...prev, range: value }));
  };
  const handleClick = (type: string) => {
    setCount((prev) => ({
      ...prev,
      count:
        type === 'plus' ? prev.count + prev.range : prev.count - prev.range,
    }));
  };

  return (
    <div>
      <input
        type="number"
        value={countState.range}
        onChange={(e) => updateRange(parseInt(e.target.value))}
      />
      <button onClick={() => handleClick('minus')}>-</button>
      <button onClick={() => handleClick('plus')}>+</button>
      <p>clicked: {countState.count}</p>
    </div>
  );
}
