import { useState } from 'react';
import Reorder from './Reorder.jsx';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleReorder = () => {
    setCount((count) => count + 5);
  };

  return (
    <>
      <h1>Inventory</h1>
      <div className="card">
        <p>
         count is {count}
        </p>
        <div className="buttons">
        
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>

        <button onClick={() => setCount((count) => count - 1)} disabled={!count}>
          -
        </button>

        {count === 0 && <Reorder onReorder={handleReorder} />}
        
        </div>
      </div>
      
    </>
  )
};

export default App;
