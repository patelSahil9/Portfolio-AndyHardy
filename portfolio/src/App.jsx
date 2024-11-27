import { React, useEffect, useRef } from 'react';
import './App.css';
import gsap from 'gsap';
import Header from "./components/Header";

function App() {
  const parent = useRef();
  const bg = useRef();
  const bg1 = useRef();
  const bg2 = useRef();
  const bg3 = useRef();
  const cards = useRef();

  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo (
      ".bg",
      { y: "100vh", opacity: 0 }, 
      { y: "-10vh", opacity: 1, duration: 1, ease: "power5.out" } 
    );
    tl.fromTo(
      ".bg1",
      { y: "0vh", opacity: 0 },
      { y: "-110vh", opacity: 1, duration: 1.5, ease: "power5.out" },
      "-=0.5" 
    );
    tl.fromTo(
      ".bg2",
      { y: "0vh", opacity: 1 },
      { y: "-110vh", opacity: 1, duration: 1.5, ease: "power5.out" },
      "-=0.5" 
    );
    tl.fromTo(
      ".bg3",
      { y: "0vh", opacity: 0 },
      { y: "-110vh", opacity: 1, duration: 1.5, ease: "power5.out" },
      "-=0.5" 
    );
  }, [parent]);

  return (
    <>
    <Header />
      <div ref={parent}>
        
        <div className="bg" ref={bg}>
          <img src="https://andyhardy.co/assets/img/landscape_andy.png" alt="andy" />
        </div>
        <div className="bg1" ref={bg1}>
          <img src='https://andyhardy.co/assets/img/landscape_mountain_small.png' alt='landscape' />
        </div>
        <div className="bg2" ref={bg2}>
          <img src='https://andyhardy.co/assets/img/landscape_background_small.jpg' alt='landscape' />
        </div>
        <div className="bg3" ref={bg3}></div>
      </div>
      
      <div className='cards' ref={cards}>
        <div className='card1'></div>
        <div className='card2'></div>
        <div className='card3'></div>
        <div className='card4'></div>
      </div>
    </>
  );
}

export default App;
