import React from 'react'
import "./IntroMain.css"
import heroImage from "../../assets/images/image-hero-desktop.png"
// import partner from "../../assets/images/icon-arrow-down.svg"
const IntroMain = () => {
  return (
    <>
    <main>
      <div className="first-column d-flex flex-column justify-content-center">
      <h1>Make <span className="jan">remote work</span></h1>
      <p className='content'>Get your team in sync. no matter
      your location. <br className='something'/>Streamine processes. create team rituals. and <br/>watch productivity soar
      </p>
      <button className='learn-more'>Learn more</button>
    </div>
    <div className="second-column">
      <img className='hero-image' src={heroImage} alt="remote work" />
    </div>
    {/* <img src={partner} alt="we meant for each other" /> */}
    </main>
    </>
  )
}

export default IntroMain

