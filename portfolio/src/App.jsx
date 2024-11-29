import React, { useRef, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { gsap } from "gsap";
import img from "./assets/emble.png";

function App() {
  const andyRef = useRef(null);

  useEffect(() => {
    console.log(andyRef.current);

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
              <img src="https://andyhardy.co/assets/img/landscape_andy.png" />
              <p>Portfolio →</p>
            </div>
          </div>
          <div className="grid-item1">
            <img src="https://andyhardy.co/media/pages/home/9c0cca0f68-1683607198/felan-bg-560x800-crop.jpg" alt="Mail List" />
            <div className="grid-overlay">
              <img src={img} alt="emble" />
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
          <div className="grid-item1">
            <img src="https://andyhardy.co/media/pages/home/50843ba13c-1683607198/presets-bg-560x800-crop.jpg" alt="Presets"
            />
            <div className="grid-overlay">
              <h3>Modern Mood Finishing LUT’s</h3>
              <p>My Presets →</p>
            </div>
          </div>
        </div>
        <div className="bigpic">
          <img src="https://andyhardy.co/media/pages/home/1ad6ac672f-1683607197/andy-about-bg-2160x1200-crop.jpg" alt="campic" />
          <p>Meet Andy, your new creative director and visual connoisseur. With a background in commercial and photojournalistic photography, he's a multidisciplinary visual creator with a focus on film and storytelling. From shooting weddings to founding two production company's in the last 5 years, fēlan films & emble studio. Andy collaborates with top-tier clients to create meaningful, impactful content. He also teaches, works on live stream events, and captures commercial photography & video. Currently, he's a commercial director based in Bright Victoria, creating content for a variety of clients ranging from Melbourne to Sydney and all along the East Coast of Australia.</p>
        </div>
        <div className="multiplepic">
          <img src="" alt="" />
          <img src="https://andyhardy.co/media/pages/home/f35a49f524-1683607197/aerial-macedon-drone-620x420-crop.jpg" />
          <img src="https://andyhardy.co/media/pages/home/edf19a4909-1683607198/derby-mountain-biking-tasmania-mtb-500x620-crop.jpg" />
          <img src="https://andyhardy.co/media/pages/home/251fd71d66-1683607197/canada-banff-exploring-mountain-620x420-crop.jpg" />
          <img src="https://andyhardy.co/media/pages/home/2c6c63f6f5-1683607198/sarah-west-coast-usa-500x620-crop.jpg" />
          <img src="https://andyhardy.co/assets/img/sand-1.png" />
          <img src="https://andyhardy.co/assets/img/sand-2.png" />
        </div>
      </div>
    </>
  );
}

export default App;
