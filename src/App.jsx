import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Joke from './routepages/Joke'
import Meme from './routepages/Meme'

const App = () => {

  return (
    <BrowserRouter> 
      <header>
        <nav>
          <NavLink to="/">Jokes</NavLink>
          <NavLink to="dadmeme">Memes</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Joke />}/>
          <Route path="dadmeme" element={<Meme />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
