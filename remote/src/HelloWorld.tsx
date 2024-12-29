import { useState } from 'react';
import SubComponent from './SubComponent';

const HelloWorld = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '2px solid #333', padding: '1rem' }}>
      <h2>Hello World v1</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <SubComponent />
    </div>
  );
};
export default HelloWorld;