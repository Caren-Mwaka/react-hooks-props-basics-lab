import React from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";

import user from "../data/user";


function App() {
  const bio = 'I made this!';
  const github = 'https://github.com/liza';
  const linkedin = 'https://www.linkedin.com/in/liza/';

  return (
    <div>
      <NavBar />
      <Home user={user} />
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
