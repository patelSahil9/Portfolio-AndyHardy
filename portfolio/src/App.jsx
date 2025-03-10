import React, { useRef, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import img from "./assets/emble.png";
// import Footer from "./components/Footer";



function App() {
  const andyRef = useRef(null);
  const gridsectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    console.log(andyRef.current);
    let tl = gsap.timeline();
    tl.fromTo(
      andyRef.current,
      { y: "100vh", opacity: 0 },
      { y: "0vh", opacity: 1, duration: 1.5, ease: "power5.out" }
    );
    tl.fromTo(
      gridsectionRef.current,
      { y: "10vh", opacity: 0 },
      { y: "0vh", opacity: 1, duration: 1.5, ease: "power5.out" }
    )

    gsap.to(".grid-item", {
      y: 0,
      scrollTrigger: {
        trigger: ".grid-item img",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });
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
          <div className="nkr"></div>
        </div>
        <div className="grid-section" ref={gridsectionRef}>
          <div className="grid-item" >
            <img src="https://andyhardy.co/media/pages/home/85d01c4049-1683607197/andy-bg-560x800-crop.jpg" alt="Portfolio" />
            <div className="grid-overlay">
              <img src="https://andyhardy.co/assets/img/landscape_andy.png" style={{ scale: "1" }} />
              <p>Portfolio →</p>
            </div>
          </div>
          <div className="grid-item1">
            <img src="https://andyhardy.co/media/pages/home/9c0cca0f68-1683607198/felan-bg-560x800-crop.jpg" alt="Mail List" />
            <div className="grid-overlay">
              <svg width="120" height="30" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fillRule="evenodd">
                  <path d="M6.288 16.255c.63-2.696 2.306-4.148 4.821-4.148 2.516 0 4.192 1.452 4.821 4.148H6.288zm15.72 1.66c0-6.016-4.61-10.579-10.899-10.579C4.611 7.336 0 11.9 0 18.33c0 .544.045 1.068.11 1.584h21.71c.053-.197.189-.821.189-1.999zM10.809 29.345c7.873 0 10.152-6.75 10.152-6.75h-6.215s-1.244 1.84-3.937 1.84c-1.705 0-3.076-.738-3.906-1.902H.524c1.5 4.13 5.334 6.812 10.285 6.812M46.983 7.336c-4.122 0-5.977 2.892-5.977 2.892H40.8s-1.65-2.892-5.771-2.892c-3.092 0-4.947 2.273-4.947 2.273h-.206l-.413-1.86h-5.358v21.072h6.183V16.839c0-2.272 1.237-3.512 3.092-3.512s3.092 1.24 3.092 3.512v11.982h6.183V16.839c0-2.272 1.277-3.512 3.092-3.512 1.855 0 3.091 1.24 3.091 3.512v11.982h6.184V16.012c0-5.164-3.504-8.676-8.039-8.676M70 7.44c-1.261 0-2.28.237-3.085.55v5.786a4.763 4.763 0 0 1 2.255-.55c2.7 0 4.776 2.066 4.776 5.166 0 3.1-2.076 5.167-4.776 5.167-2.699 0-4.775-2.067-4.775-5.167 0-.128.008-.25.016-.375v-8.51h-.016V0h-6.23v28.932h5.4l.415-2.067h.207s1.66 2.48 5.814 2.48c5.606 0 10.174-4.546 10.174-10.953C80.175 11.986 75.607 7.44 70 7.44M82.27 28.821h6.289V0h-6.288zM101.989 24.436c-1.705 0-3.076-.74-3.907-1.903h-6.379c1.501 4.13 5.334 6.812 10.286 6.812 7.872 0 10.15-6.75 10.15-6.75h-6.214s-1.243 1.84-3.936 1.84M97.468 16.255c.628-2.696 2.305-4.148 4.82-4.148 2.516 0 4.192 1.452 4.822 4.148h-9.642zm15.72 1.66c0-6.016-4.612-10.579-10.9-10.579-6.497 0-11.109 4.563-11.109 10.993 0 .544.045 1.068.109 1.584H113c.052-.197.188-.821.188-1.999zM113.592 4.48h-.928v-.812h2.62v.812h-.93v2.856h-.762zM116.332 3.668h1.138l.65 2.28h.092l.65-2.28H120v3.668h-.743V5.083h-.093l-.65 2.253h-.696l-.65-2.253h-.093v2.253h-.743z" />
                </g>
              </svg>
              <p>Mail List →</p>
            </div>
          </div>
          <div className="grid-item"  >
            <img src="https://andyhardy.co/media/pages/home/cdf385d1f1-1683607198/education-bg-560x800-crop.jpg" alt="Education" />
            <div className="grid-overlay">
              <svg width="98" height="100" xmlns="http://www.w3.org/2000/svg" >
                <g fill="#FEFEFE" fillRule="evenodd">
                  <path d="M6.868 21.128l7.602 4.528a.244.244 0 01.085.333l-.64 1.074a.243.243 0 01-.334.085L9.238 24.56l2.82 4.28c.08.12.084.277.01.401l-.49.823a.38.38 0 01-.36.184l-5.105-.44 4.343 2.586a.243.243 0 01.085.333l-.64 1.074a.244.244 0 01-.333.085l-7.602-4.528a.244.244 0 01-.085-.333l.64-1.074c.003-.005.007-.007.01-.011a.377.377 0 01.338-.156l6.801.587-3.756-5.7a.378.378 0 01-.024-.371c.003-.005.002-.01.005-.014l.64-1.074a.244.244 0 01.333-.085M16.343 13.403a2.883 2.883 0 00-.391 4.054 2.884 2.884 0 004.054.391 2.883 2.883 0 00.391-4.054 2.883 2.883 0 00-4.054-.391m4.768 5.785a4.622 4.622 0 01-6.5-.627 4.622 4.622 0 01.628-6.499 4.622 4.622 0 016.499.628 4.622 4.622 0 01-.627 6.498M34.6 2.08l2.975 8.331a.244.244 0 01-.147.311l-1.177.42a.243.243 0 01-.312-.147l-1.7-4.76-.552 5.094a.378.378 0 01-.249.316l-.902.322a.378.378 0 01-.393-.086L28.49 8.288l1.7 4.76a.243.243 0 01-.148.311l-1.177.42a.244.244 0 01-.311-.147L25.579 5.3a.243.243 0 01.147-.31l1.177-.42c.005-.003.01-.002.015-.003a.377.377 0 01.36.096l4.867 4.784.736-6.785a.377.377 0 01.219-.302l.012-.008 1.177-.42a.243.243 0 01.311.148M43.863 2.183l.055 2.024 3.662-.098a.244.244 0 01.25.237l.034 1.25a.243.243 0 01-.237.25l-3.663.098.057 2.12 4.748-.128a.244.244 0 01.25.237l.033 1.25a.243.243 0 01-.237.25l-4.99.133-1.25.034a.244.244 0 01-.25-.237L42.088.758a.243.243 0 01.237-.25l.77-.02a.24.24 0 01.097-.024L48.565.32a.243.243 0 01.25.236l.033 1.25a.244.244 0 01-.237.25l-4.748.127zM63.862 3.391l-2.384 8.52a.243.243 0 01-.3.17l-1.203-.337c-.01-.003-.019-.01-.028-.014a.246.246 0 01-.114-.095l-.016-.043-2.715-6.73-1.512 5.403a.243.243 0 01-.3.168l-1.203-.336a.244.244 0 01-.17-.3l2.384-8.52a.243.243 0 01.3-.169l1.203.336c.064.018.115.06.146.114l.001-.003 2.696 6.882 1.542-5.514a.244.244 0 01.3-.168l1.204.336c.129.036.205.17.169.3M77.072 10.52l-.674 1.052a.244.244 0 01-.337.073l-2.262-1.45-3.98 6.21a.244.244 0 01-.335.073l-1.053-.674a.243.243 0 01-.073-.336l3.98-6.21-2.263-1.449a.243.243 0 01-.074-.336l.675-1.053a.243.243 0 01.336-.073l5.986 3.836a.243.243 0 01.074.337M82.554 18.34c-.167.005-.385.06-.594.45-.185.342.008.913.203 1.364l.311.69.003.005.018.042.014.03c.333.762.684 1.865.139 2.88-.46.852-1.195 1.336-2.073 1.36-.953.028-1.992-.52-2.731-1.406a4.496 4.496 0 01-.377-.524c-.57-.928-.713-1.918-.413-2.781a.378.378 0 01.536-.213l.888.482a.372.372 0 01.187.408c-.108.482.15.98.281 1.194.396.645 1.075 1.12 1.58 1.105.166-.005.383-.06.593-.449.185-.343-.01-.917-.206-1.369l-.299-.648.008-.004-.014-.025c-.343-.762-.744-1.913-.177-2.965.459-.853 1.195-1.336 2.073-1.362 1.128-.032 2.377.744 3.108 1.932.574.933.714 1.93.407 2.796a.364.364 0 01-.516.206l-.912-.495a.357.357 0 01-.18-.393c.114-.485-.146-.989-.279-1.205-.395-.644-1.075-1.12-1.578-1.105M86.672 41.499l-.262-1.222a.243.243 0 01.187-.29l8.648-1.858a.243.243 0 01.289.187l.263 1.221a.244.244 0 01-.187.29l-8.649 1.858a.243.243 0 01-.29-.186M96.503 55.817l-8.839-.388a.244.244 0 01-.232-.254l.054-1.249c0-.01.006-.02.008-.03a.238.238 0 01.067-.133l.037-.025 5.94-4.171-5.606-.247a.243.243 0 01-.232-.254l.055-1.248a.244.244 0 01.254-.233l8.839.388c.134.006.238.12.232.254l-.055 1.249a.243.243 0 01-.077.167h.003L90.86 53.83l5.72.252c.134.006.237.12.232.254l-.055 1.248a.244.244 0 01-.254.233M82.638 76.519l3.414.69-1.774-2.997-1.64 2.307zm-4.922.42l.78-1.096a.267.267 0 01.27-.107l2.85.576 1.757-2.471-3.524-.714a.243.243 0 01-.18-.352l.797-1.118a.244.244 0 01.27-.107l5.99 1.212c.092.018.167.076.215.153a.243.243 0 01-.035.283l-1.756 2.471 2.012.406c.092.019.167.076.215.153a.243.243 0 01-.034.283l-.78 1.096a.244.244 0 01-.271.107l-3.92-.793-2.083 2.937a.244.244 0 01-.27.106l-1.768-.357a.244.244 0 01-.215-.153.244.244 0 01.035-.283l2.083-2.936-2.043-.414a.245.245 0 01-.215-.153.244.244 0 01.035-.283" />
                </g>
              </svg>
              <p>Education →</p>
            </div>
          </div>
          <div className="grid-item1">
            <img src="https://andyhardy.co/media/pages/home/50843ba13c-1683607198/presets-bg-560x800-crop.jpg" alt="Presets"
            />
            <div className="grid-overlay">

              <p>My Presets →</p>
            </div>
            <div className="nkr"></div>
          </div>
        </div>
        <div className="bigpic">
          <img src="https://andyhardy.co/media/pages/home/1ad6ac672f-1683607197/andy-about-bg-2160x1200-crop.jpg" alt="campic" />

          <div className="btf"></div>
          <div className="circle">
            <svg width="110" height="110" viewBox="0 0 110 110">
              <path id="textpath-1" d="M 55, 55 m -55, 0 a 55,55 0 1,0 110,0 a 55,55 0 1,0 -110,0"
                fill="none" stroke="none"></path>
              <text fill="#FFF">
                <textPath href="#textpath-1" startOffset="50%" textAnchor="middle">
                  CREATIVE &nbsp; DIRECTOR
                </textPath>
              </text>
            </svg>
          </div>

          <p>Meet Andy, your new creative director and visual connoisseur. With a background in commercial and photojournalistic photography, he's a multidisciplinary visual creator with a focus on film and storytelling. From shooting weddings to founding two production company's in the last 5 years, fēlan films & emble studio. Andy collaborates with top-tier clients to create meaningful, impactful content. He also teaches, works on live stream events, and captures commercial photography & video. Currently, he's a commercial director based in Bright Victoria, creating content for a variety of clients ranging from Melbourne to Sydney and all along the East Coast of Australia.</p>
        </div>
        {/* <div className="portfolio-grid">
          <div className="item-1">
            <img
              src="https://andyhardy.co/media/pages/home/f35a49f524-1683607197/aerial-macedon-drone-620x420-crop.jpg"
              alt="Image 1"
            />
          </div>
          <div className="item-2">
            <img
              src="https://andyhardy.co/media/pages/home/edf19a4909-1683607198/derby-mountain-biking-tasmania-mtb-500x620-crop.jpg"
              alt="Image 2"
            />
          </div>
          <div className="item-3">
            <img
              src="https://andyhardy.co/media/pages/home/251fd71d66-1683607197/canada-banff-exploring-mountain-620x420-crop.jpg"
              alt="Image 3"
            />
          </div>
          <div className="item-4">
            <img
              src="https://andyhardy.co/media/pages/home/2c6c63f6f5-1683607198/sarah-west-coast-usa-500x620-crop.jpg"
              alt="Image 4"
            />
          </div>
          <div className="item-5">
            <img
              src="https://andyhardy.co/assets/img/sand-1.png"
              alt="Image 5"
            />
          </div>
          <div className="item-6">
            <img
              src="https://andyhardy.co/assets/img/sand-2.png"
              alt="Image 6"
            />
          </div>
        </div> */}
      </div>
      <div></div>
<Footer/>
    </>
  );
}

export default App;
