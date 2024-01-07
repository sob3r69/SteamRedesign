import { useEffect, useState } from 'react';
import { BigGameCard } from '..';
import './GamesSlider.scss';
import { ProgressBar } from '@/shared/components';
import { BigArrow } from '@/app/assets';

type GamesSliderProps = {
  apps: string[];
  autoPlay?: boolean;
  autoPlayTime?: number;
  cardType?: 'small' | 'medium' | 'big';
};

const GamesSlider = ({ apps, autoPlay, autoPlayTime }: GamesSliderProps) => {
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

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [apps.length, slide]);

  return (
    <div className="games_slider">
      <button className="slider_button" onClick={() => changeSlide(-1)}>
        <img id="arrowLeft" src={BigArrow} />
      </button>
      <div className="slider_container">
        <div className="slider" style={{ transform: `translateX(-${slide * 100}%)` }}>
          {apps.map((appID: string) => (
            <BigGameCard gameID={appID} key={appID} />
          ))}
        </div>
        <div className="slider_buttons">
          {apps.map((appID: string, index: number) => (
            <button className="slider_button" key={appID} onClick={() => setSlide(index)}>
              <ProgressBar isActive={slide === index} autoPlayTime={autoPlayTime!} key={appID} />
            </button>
          ))}
        </div>
      </div>
      <button className="slider_button" onClick={() => changeSlide(1)}>
        <img id="arrowRight" src={BigArrow} />
      </button>
    </div>
  );
};

export default GamesSlider;
