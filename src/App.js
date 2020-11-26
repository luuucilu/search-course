import logo from "./logo.svg";
import "./App.scss";
import Search from "./components/Search";
import Courses from "./components/Courses";

import { useState } from "react";

function App() {
  const courses = [
    {
      name: "HTML Y CSS",
      color: "#2FA4AB",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/html-css.png",
      desc:
        "Aprendé a estructurar páginas web con HTML y desatá todo su potencial visual con CSS siguiendo los estándares de la industria",
    },

    {
      name: "Javascript",
      color: "#DE9103",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/javascript.png",
      desc:
        "Aprendé a programar junto al lenguaje que domina el mundo del desarrollo web",
    },
  ];

  const [inputValue, setInputValue] = useState(courses);

  function handleChange(inputValue) {
    //const { value } = e.target;
    const filterStr = courses.filter((course) =>
      course.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setInputValue(filterStr);
  }

  return (
    <div className="App">
      <Search handleCallback={handleChange} />
      {/* <input type="text" className="input" onChange={handleChange} /> */}
      <div className="card">
        <Courses data={inputValue} />
      </div>
    </div>
  );
}

export default App;
