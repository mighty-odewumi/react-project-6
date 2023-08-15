import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { useState } from "react";


export default function App() {

  const [darkMode, setDarkMode] = useState(true);

  function toggleMode() {

    setDarkMode(prevValue => !prevValue);
  }

  // console.log(darkMode);

  return (
    <div className="container">
      <NavBar darkMode={darkMode} toggleFunc={toggleMode}/>
      <Main darkMode={darkMode} toggleFunc={toggleMode}/>
    </div>
  )
}
