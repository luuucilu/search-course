import logo from './logo.svg';
import './App.scss';

import { useState } from "react";

function App() {

  const [inputValue, setInputValue] = useState("");

  function handleChange(e){
    const { value } = e.target;
    const filterStr = courses.filter(course => course.name.toLowerCase().includes(value.toLowerCase()));
    setInputValue(filterStr);
  }

  const courses = [
    {
      name: 'HTML Y CSS',
      color: '#2FA4AB',
      img: 'https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/html-css.png',
      desc: 'Aprendé a estructurar páginas web con HTML y desatá todo su potencial visual con CSS siguiendo los estándares de la industria'
    },

    {
      name: 'Javascript',
      color: '#DE9103',
      img: 'https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/javascript.png',
      desc: 'Aprendé a programar junto al lenguaje que domina el mundo del desarrollo web'
    }

  ]

  return (
    <div className="App">
      <input type="text" className="input" onChange={handleChange} />
      <div className="card">
        {inputValue.map((course, key) =>{
          return(
              <div className="cardWrapper" key={key}>
                <div 
                  style={{ backgroundColor: course.color }}
                  className="image" key={key}
                  >
                  <img src={course.img} alt="" className="img"/>
                </div>

                <div class="text">
                  <h1 key={key} className="title">{course.name}</h1>
                  <p key={key} className="desc">{course.desc}</p>
                </div>
              </div>
          )

        })}
      </div>
    </div>
  );
}

export default App;
