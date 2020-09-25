import React, { useState } from 'react';
import Tweet from './Tweet';
function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([
    { name: "Ed", message: "hello world" },
    { name: "Ed", message: "hello world" },
    { name: "Ed", message: "hello world" },
    { name: "Ed", message: "hello world" }
  ]);


  const increamt = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  return (
    <div className="app">
      <h1 className={isRed ? "red" : ""}>Change my color</h1>
      <button onClick={increamt}>Increament</button>
      <h1>{count}</h1>

      {users.map(user => (
        <Tweet name={user.name} message={user.nessage} />
      ))}
    </div>
  );
}



export default App;