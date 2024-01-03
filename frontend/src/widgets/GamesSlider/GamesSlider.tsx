import { useState } from 'react';
import { BigGameCard } from '..';
import './GamesSlider.scss';

type GamesSliderProps = {
  apps: string[];
  autoPlay?: boolean;
  autoPlayTime?: number;
  cardType?: 'small' | 'medium' | 'big';
};

const GamesSlider = ({ apps }: GamesSliderProps) => {
  const [slide, setSlide] = useState(0);
  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = apps.length - 1;
    } else {
      slideNumber = (slide + direction) % apps.length;
    }

    setSlide(slideNumber);
  };
  return (
    <div className="games_slider">
      <button onClick={() => changeSlide(-1)}>&larr;</button>
      <div className="slider_container">
        <div className="slider" style={{ transform: `translateX(-${slide * 100}%)` }}>
          {apps.map((appID: string) => (
            <BigGameCard gameID={appID} key={appID} />
          ))}
        </div>
      </div>
      <button onClick={() => changeSlide(1)}>&rarr;</button>
    </div>
  );
};

export default GamesSlider;
