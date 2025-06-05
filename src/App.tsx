import React, { useRef, useState } from "react";
import normalImg from "./assets/bonk_1.jpg";
import punchedImg from "./assets/bonk_2.jpg";

import catCloseImg from "./assets/cat1.jpg";
import catOpenImg from "./assets/cat2.jpg";

import punchSound from "./assets/sound effect.mp3";
import catSound from "./assets/cat_meow.mp3";

import staticImg from "./assets/cat_eating_normal.jpg";
import gifImg from "./assets/cat_eating.gif";

import { Carousel } from "antd";

const App: React.FC = () => {
  const [isPunched, setIsPunched] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isHolding, setIsHolding] = useState(false);

  const handleMouseDown = () => {
    setIsHolding(true);
  };

  const handleMouseUp = () => {
    setIsHolding(false);
  };

  // const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    // 🔊 Create a NEW audio instance each time
    const sound = new Audio(punchSound);
    sound.volume = 1.0;
    sound.play().catch((err) => {
      console.warn("Audio play failed:", err);
    });

    // 💥 Flash image
    setIsPunched(true);
    setTimeout(() => setIsPunched(false), 100);
  };

  const handleClickEat = () => {
    // 🔊 Create a NEW audio instance each time
    const sound = new Audio(catSound);
    sound.volume = 1.0;
    sound.play().catch((err) => {
      console.warn("Audio play failed:", err);
    });

    // 💥 Flash image
    setIsOpened(true);
    setTimeout(() => setIsOpened(false), 100);
  };

  return (
    <div>
      <Carousel arrows infinite={true}>
        {/* meme-1 */}
        <div>
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: "#364d79",
            }}
            onClick={handleClick}
          >
            <img
              src={isPunched ? punchedImg : normalImg}
              alt="Punchable"
              style={{
                width: "30vw",
                height: "auto",
                userSelect: "none",
                transition: "all 0.1s ease-in-out",
              }}
            />
          </div>
        </div>

        {/* meme-2 */}
        <div>
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: "#364d79",
            }}
            onClick={handleClickEat}
          >
            <img
              src={isOpened ? catOpenImg : catCloseImg}
              alt="Punchable"
              style={{
                width: "30vw",
                height: "auto",
                userSelect: "none",
                transition: "all 0.1s ease-in-out",
              }}
            />
          </div>
        </div>

        {/* meme-3 */}

        <div>
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: "#364d79",
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              src={isHolding ? gifImg : staticImg}
              alt="Bonk"
              style={{
                width: "30vw",
                height: "auto",
                userSelect: "none",
                transition: "all 0.2s ease-in-out",
              }}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default App;
