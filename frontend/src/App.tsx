import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const apiURL = `http://localhost:${process.env.REACT_APP_PUBLISHED_BACKEND_PORT}`;

const getClicked = async (): Promise<number> => {
  const response = await axios.get(`${apiURL}/api/click`);
  const data: { clicked: number } = await response.data;
  return data.clicked;
};

function App() {
  const [clicked, setClicked] = useState<number>();

  const click = async () => {
    await axios.post(`${apiURL}/api/click`);
    const clicked = await getClicked();
    setClicked(clicked);
  };

  useEffect(() => {
    getClicked().then((clicked) => setClicked(clicked));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={click}
          rel="noopener noreferrer"
        >
          Click Here!
        </button>
        <p>
          Number of clicked: {clicked}
        </p>
      </header>
    </div>
  );
}

export default App;
