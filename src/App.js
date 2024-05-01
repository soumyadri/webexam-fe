import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/button";

function App() {
  return (
    <NextUIProvider>
    <div className="App">
      <header className="App-header">
        <Button>Button</Button>
        <h1 className="text-3xl font-bold underline bg-white-100">
          Hello world!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </NextUIProvider>
  );
}

export default App;
