import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Background Section */}
      <div className="background">
        <div className="bg-layer">
          <img
            src="https://andyhardy.co/assets/img/landscape_background_small.jpg"
            alt="Background"
          />
        </div>
        <div className="bg-layer">
          <img
            src="https://andyhardy.co/assets/img/landscape_andy.png"
            alt="Andy"
          />
        </div>
        <div className="bg-layer">
          <img
            src="https://andyhardy.co/assets/img/landscape_mountain_small.png"
            alt="Mountains"
          />
        </div>
        <div className="text-content">
          <h1>ANDY!</h1>
          <p>Creating films in Melbourne / Bright</p>
        </div>
      </div>

      {/* New Grid Section */}
      <div className="grid-section">
        <div className="grid-item">
          <img
            src="https://andyhardy.co/assets/img/landscape_background_small.jpg"
            alt="Portfolio"
          />
          <div className="grid-overlay">
            <h3>ANDY!</h3>
            <p>View Portfolio →</p>
          </div>
        </div>
        <div className="grid-item">
          <img
            src="https://andyhardy.co/assets/img/landscape_andy.png"
            alt="Mail List"
          />
          <div className="grid-overlay">
            <h3>emble</h3>
            <p>Mail List →</p>
          </div>
        </div>
        <div className="grid-item">
          <img
            src="https://andyhardy.co/assets/img/landscape_background_small.jpg"
            alt="Education"
          />
          <div className="grid-overlay">
            <h3>Moments in a Minute</h3>
            <p>Education →</p>
          </div>
        </div>
        <div className="grid-item">
          <img
            src="https://andyhardy.co/assets/img/landscape_mountain_small.png"
            alt="Presets"
          />
          <div className="grid-overlay">
            <h3>Modern Mood Finishing LUT’s</h3>
            <p>My Presets →</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


css


/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  color: #fff;
  overflow-x: hidden;
}

.App {
  width: 100%;
  position: relative;
}

/* Background Styling */
.background {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.bg-layer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.text-content {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 5;
}

.text-content h1 {
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  margin-bottom: 10px;
}

.text-content p {
  font-size: 1.2rem;
  letter-spacing: 1px;
}

/* Grid Section Styling */
.grid-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 20px;
  background-color: #000;
}

.grid-item {
  position: relative;
  width: 300px;
  height: 400px;
  margin: 20px;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.grid-item:hover img {
  transform: scale(1.1);
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.grid-item:hover .grid-overlay {
  opacity: 1;
}

.grid-overlay h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.grid-overlay p {
  font-size: 1rem;
  letter-spacing: 1px;
}
