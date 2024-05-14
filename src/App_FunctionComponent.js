import React, { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState("Hello world");
  const [state2, setState2] = useState("e");

  return (
    <div className="App">
      {/* <h1>{message}</h1> */}
      <h1>{state}{state2}</h1>
    </div>
  );
}

export default App;
