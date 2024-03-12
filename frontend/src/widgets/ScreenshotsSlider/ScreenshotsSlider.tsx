import './ScreenshotsSlider.scss';

import { useEffect, useState } from 'react';
import { BigArrow } from '@/app/assets';
import { Screenshot } from '@/entities/app/types';

type ScreenshotsSliderProps = {
  screenshots: Screenshot[];
  autoPlay?: boolean;
  autoPlayTime?: number;
};

const ScreenshotsSlider = ({ screenshots, autoPlay, autoPlayTime }: ScreenshotsSliderProps) => {
  const [slide, setSlide] = useState(0);
  const [activeScreenshot, setActiveScreenshot] = useState('');

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = screenshots.length - 1;
    } else {
      slideNumber = slide + (direction % screenshots.length);
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
  }, [screenshots.length, slide]);

  return (
    <>
      <img width={1078} height={515} src={activeScreenshot || screenshots[0].path_full} />
      <div className="screenshots_slider">
        <button className="slider_button" onClick={() => changeSlide(-1)}>
          <img id="arrowLeft" src={BigArrow} />
        </button>
        <div className="screenshots_slider_container">
          {screenshots.map((screenshot) => (
            <button
              className="screenshots_slider_button"
              style={{ padding: 0, background: 'none' }}
              onClick={() => setActiveScreenshot(screenshot.path_full)}
            >
              <img width={231} src={screenshot.path_thumbnail} />
            </button>
          ))}
        </div>
        <button className="slider_button" onClick={() => changeSlide(-1)}>
          <img id="arrowRight" src={BigArrow} />
        </button>
      </div>
    </>
  );
};

export default ScreenshotsSlider;
