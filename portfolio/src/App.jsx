import React, { useRef, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { gsap } from "gsap";

function App() {
  const andyRef = useRef(null);

  useEffect(() => {
    console.log(andyRef.current); // Ensure this logs the correct element
    let tl = gsap.timeline();
    tl.fromTo(
      andyRef.current,
      { y: "100vh", opacity: 0 },
      { y: "0vh", opacity: 1, duration: 1.5, ease: "power5.out" }
    );
  }, []);

  return (
    <>
      <Header />
      <div className="App">

        <div className="background">
          <div className="bg-layer">
            <img
              src="https://andyhardy.co/assets/img/landscape_background_small.jpg"
              alt="Background"
            />
          </div>
          <div className="bg-layer" ref={andyRef}>
            <img
              src="https://andyhardy.co/assets/img/landscape_andy.png"
              alt="Andy" className="andy-img"
            />
          </div>
          <div className="bg-layer">
            <img
              src="https://andyhardy.co/assets/img/landscape_mountain_small.png"
              alt="Mountains"
            />
          </div>
        </div>



        <div className="grid-section">
          <div className="grid-item">
            <img src="https://andyhardy.co/media/pages/home/85d01c4049-1683607197/andy-bg-560x800-crop.jpg" alt="Portfolio" />
            <div className="grid-overlay">
              <img src="https://andyhardy.co/assets/img/landscape_andy.png"/>
              <p>Portfolio →</p>
            </div>
          </div>
          <div className="grid-item">
            <img src="https://andyhardy.co/media/pages/home/9c0cca0f68-1683607198/felan-bg-560x800-crop.jpg" alt="Mail List" />
            <div className="grid-overlay">
              <h3>emble</h3>
              <p>Mail List →</p>
            </div>
          </div>
          <div className="grid-item">
            <img src="https://andyhardy.co/media/pages/home/cdf385d1f1-1683607198/education-bg-560x800-crop.jpg" alt="Education" />
            <div className="grid-overlay">
              <h3>Moments in a Minute</h3>
              <p>Education →</p>
            </div>
          </div>
          <div className="grid-item">
            <img src="https://andyhardy.co/media/pages/home/50843ba13c-1683607198/presets-bg-560x800-crop.jpg" alt="Presets"
            />
            <div className="grid-overlay">
              <h3>Modern Mood Finishing LUT’s</h3>
              <p>My Presets →</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
