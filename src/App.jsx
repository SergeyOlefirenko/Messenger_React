import React from 'react';
// import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import elements from "./data/sidebar.json"
import Loader from './loader/Loader';
import AppRouter from './exportrouter/Approuter';


export const AppContext = createContext();

function App() {
  const [navi, setNavi] = useState(elements);
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState('todos')
  return (
    <AppContext.Provider value={{
      navi,
      setNavi,
      count,
      setCount,
      todo,
      setTodo
    }}>
      <div className="App">
      <AppRouter />
        <Routes>
          <Route path="/" element={<Loader />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

