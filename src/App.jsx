import { useState } from 'react'
import './App.css'
import personalPhoto from './assets/personal-photo.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <div className="main-facade-cont">
          <div className="mfcs-left main-facade-cont-sub">
            <div className=""> 
              <h4 className="font-scode me-3">Hi! My name is </h4>
              <h1>Abenezer Amanuel.</h1>
            </div>
            <h4 className="font-scode"> I'm an aspiring Software Engineer studying Computer Science at Columbia University in the city of New York.</h4>
          </div>
          <div className="main-facade-cont-sub">
            <img className="personal-photo" src={personalPhoto} alt="professional photo of abenezer"></img>
          </div>
        </div>
        <div className="scroll-cont">
          <div class="scroll"></div>
        </div>
    </div>
  )
}

export default App
