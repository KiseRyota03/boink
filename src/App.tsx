import React, { useState, useRef } from "react";
import normalImg from "./assets/bonking_1.jpg";
import punchedImg from "./assets/bonking_2.jpg";

import catCloseImg from "./assets/catClose.jpg";
import catOpenImg from "./assets/catOpen.jpg";

import punchSound from "./assets/sound effect.mp3";
import catSound from "./assets/cat_meow.mp3";
import eatSound from "./assets/eating_sound.mp3";

import staticImg from "./assets/cat_eating_normal.jpg";
import gifImg from "./assets/cat_eating.gif";
import "./App.css";

import { Carousel } from "antd";

const App: React.FC = () => {
  const [isPunched, setIsPunched] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isHolding, setIsHolding] = useState(false);

  const holdingSoundRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseDown = () => {
    setIsHolding(true);

    const sound = new Audio(eatSound);
    sound.loop = true; // 🔁 optional if you want looping while holding
    sound.volume = 1.0;
    sound.play().catch((err) => {
      console.warn("Audio play failed:", err);
    });

    holdingSoundRef.current = sound;
  };

  const handleMouseUp = () => {
    setIsHolding(false);

    // ⛔ Stop and reset sound
    if (holdingSoundRef.current) {
      holdingSoundRef.current.pause();
      holdingSoundRef.current.currentTime = 0;
      holdingSoundRef.current = null;
    }
  };

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
          <div className="carousel-slide" onClick={handleClick}>
            <img
              src={isPunched ? punchedImg : normalImg}
              alt="Punchable"
              className="carousel-image"
            />
          </div>
        </div>

        {/* meme-2 */}
        <div>
          <div className="carousel-slide" onClick={handleClickEat}>
            <img
              src={isOpened ? catOpenImg : catCloseImg}
              alt="Cat"
              className="carousel-image"
            />
          </div>
        </div>

        {/* meme-3 */}
        <div>
          <div
            className="carousel-slide"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              src={isHolding ? gifImg : staticImg}
              alt="Eating"
              className="carousel-image"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default App;
