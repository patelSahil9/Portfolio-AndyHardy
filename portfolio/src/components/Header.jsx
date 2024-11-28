import React,{useRef,useEffect} from "react";
import { gsap } from "gsap"
import "./Header.css";

function App() {

  const headercontainer = useRef(null);

  useEffect(()=>{
    let t1=gsap.timeline();
    t1.to(
      headercontainer.current,
      {
        opacity: 1,
        // zIndex: 20,
        duration: 1,
        delay: 0.8,
        ease: 'power4.inOut',
      },
      0.88,
    );
  })

  return (
    <div className="header-container" ref={headercontainer}>
      <div className="menu-icon">=</div>
      <h3 className="logo">ANDREW&nbsp; HARDY</h3>
      <button className="get-in-touch-btn">Get in touch</button>
      {/* <img src="https://andyhardy.co/assets/img/landscape_background_small.jpg"alt="landscape" /> */}
    </div>
  );
}

export default App;
