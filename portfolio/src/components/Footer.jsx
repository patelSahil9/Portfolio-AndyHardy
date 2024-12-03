import React, { useEffect } from "react";
import "./Footer.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".photo1", {
      x: -100, 
      y: -150, 
      rotation: -9, 
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".photo1",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".photo2", {
      x: 150, 
      y: -120,
      rotation: 10,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".photo2",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".photo3", {
      x: -150,
      y: 100,
      rotation: -7,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".photo3",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".photo4", {
      x: 90,
      y: 50,
      rotation: 8,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".photo4",
        start: "top 65%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".photo5", {
      x: -220,
      y: -70,
      rotation: 2,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".photo5",
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".photo6", {
      x: 200,
      y: 100,
      rotation: 6,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".photo6",
        start: "top 55%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <>
    <div className="photo-gallery">
      <div className="gallery">
        <img
          src="https://andyhardy.co/media/pages/home/edf19a4909-1683607198/derby-mountain-biking-tasmania-mtb-500x620-crop.jpg"
          className="photo photo1"style={{ zIndex: 4,width: "20%" }}
        />
        <img
          src="https://andyhardy.co/media/pages/home/f35a49f524-1683607197/aerial-macedon-drone-620x420-crop.jpg"
          className="photo photo2" style={{ zIndex: 5 ,width: "25%"}}
        />
        <img
          src="https://andyhardy.co/media/pages/home/251fd71d66-1683607197/canada-banff-exploring-mountain-620x420-crop.jpg"
          className="photo photo3"style={{ zIndex: 3,width: "25%" }}
        />
        <img
          src="https://andyhardy.co/media/pages/home/2c6c63f6f5-1683607198/sarah-west-coast-usa-500x620-crop.jpg"
          className="photo photo4"style={{ zIndex: 2,width: "20%" }}
        />
        <img
          src="https://andyhardy.co/assets/img/sand-1.png"
          className="photo photo5"style={{ zIndex: 1 }}
        />
        <img
          src="https://andyhardy.co/assets/img/sand-2.png"
          className="photo photo6"style={{ zIndex: 1 }}
        /><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,12a11.6,11.6,0,0,1-10,6A11.6,11.6,0,0,1,2,12,11.6,11.6,0,0,1,12,6,11.6,11.6,0,0,1,22,12Z" fill="none" stroke="#fff" stroke-width="1.5"></path><circle cx="12" cy="12" r="3" fill="none" stroke="#fff" stroke-width="1.5"></circle></svg></div>
      </div>
      <div className="ptf">
        <h3 className="ptf-text">VIEW PORTFOLIO &nbsp;
        <svg width="16" height="16"><g stroke="#FFF" fill="none" fill-rule="evenodd"><path d="M9.414 2.343L15.071 8l-5.657 5.657M15.071 8H.93"></path></g></svg>
        </h3>
      </div>
    </div>
    </>
  );
};

export default Footer;
  