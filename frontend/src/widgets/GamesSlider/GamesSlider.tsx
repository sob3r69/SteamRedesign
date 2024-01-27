import { useEffect, useState } from 'react';
import { BigGameCard } from '..';
import './GamesSlider.scss';
import { NavDots } from '@/shared/components';
import { BigArrow } from '@/app/assets';
import GamesSliderPage from '@/shared/components/GamesSliderPage/GamesSliderPage';
import { divideArray } from '@/shared/helpers';

type GamesSliderProps = {
  data: string[];
  autoPlay?: boolean;
  autoPlayTime?: number;
  type: 'slide' | 'page';
};

const GamesSlider = ({ data, autoPlay, autoPlayTime, type }: GamesSliderProps) => {
  const dividedApps = type === 'page' ? divideArray(data, 6) : [];
  const [slide, setSlide] = useState(0);
  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = type === 'page' ? dividedApps.length - 1 : data.length - 1;
    } else {
      slideNumber = (slide + direction) % (type === 'page' ? dividedApps.length : data.length);
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
  }, [data.length, slide]);

  return (
    <div className="games_slider">
      <button className="slider_button" onClick={() => changeSlide(-1)}>
        <img id="arrowLeft" src={BigArrow} />
      </button>
      <div className="slider_container">
        <div className="slides" style={{ transform: `translateX(-${slide * 100}%)` }}>
          {type === 'slide' ? (
            data.map((appID: string, index) => (
              <BigGameCard gameID={appID} key={'slider_bigcard_' + index} />
            ))
          ) : (
            <GamesSliderPage apps={dividedApps} />
          )}
        </div>
        <div className="slider_buttons">
          {type === 'page'
            ? dividedApps.map((data: string[], index: number) => (
                <NavDots
                  key={'page_dots_' + index}
                  onClick={() => setSlide(index)}
                  time={autoPlayTime!}
                  isActive={slide === index}
                />
              ))
            : data.map((appID: string, index: number) => (
                <NavDots
                  key={'slider_bigcard_dots_' + index}
                  isActive={slide === index}
                  onClick={() => setSlide(index)}
                  time={autoPlayTime!}
                />
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
