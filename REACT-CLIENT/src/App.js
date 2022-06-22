import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js/Home";
import { Counter } from "./components/Counter/Counter";
import LoggedIn from "./components/LoggedIn/LoggedIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="loggedin" element={<LoggedIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
