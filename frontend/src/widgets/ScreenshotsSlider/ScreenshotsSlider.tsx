import './ScreenshotsSlider.scss';

import { useEffect, useRef, useState } from 'react';
import { BigArrow } from '@/app/assets';
import { Screenshot } from '@/entities/app/types';

type ScreenshotsSliderProps = {
  screenshots: Screenshot[];
  autoPlay?: boolean;
  autoPlayTime?: number;
};

const ScreenshotsSlider = ({ screenshots, autoPlay, autoPlayTime }: ScreenshotsSliderProps) => {
  const [slide, setSlide] = useState(0);
  const [activeScreenshot, setActiveScreenshot] = useState<Screenshot>(screenshots[0]);
  const [tempScreenshot, setTempScreenshot] = useState<Screenshot>();

  const activeScreenshotRef = useRef<HTMLImageElement>(null);
  const tempScreenshotRef = useRef<HTMLImageElement>(null);
  const screenshotContRef = useRef<HTMLDivElement>(null);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = screenshots.length - 1;
    } else {
      slideNumber = slide + (direction % screenshots.length);
    }

    setSlide(slideNumber);
  };

  // TODO: refactor animation code
  const startFadeAnimation = () => {
    activeScreenshotRef.current!.className = 'selected_screenshot fadeanim';
    tempScreenshotRef.current!.className = 'temp_screenshot fadeout';
    // setTimeout(() => {
    //   stopFadeAnimation();
    // }, 300);
  };

  const stopFadeAnimation = () => {
    activeScreenshotRef.current!.className = 'selected_screenshot';
    tempScreenshotRef.current!.className = 'temp_screenshot';
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
      <img
        className="selected_screenshot"
        width={1078}
        height={515}
        src={activeScreenshot.path_full || screenshots[0].path_full}
        ref={activeScreenshotRef}
      />
      <img
        className="temp_screenshot"
        width={1078}
        height={515}
        src={tempScreenshot?.path_full || screenshots[0].path_full}
        ref={tempScreenshotRef}
      />
      <div className="screenshots_slider">
        <button
          className="slider_button"
          onClick={() => {
            screenshotContRef.current!.scrollBy(-400, 0);
            changeSlide(-1);
          }}
        >
          <img id="arrowLeft" src={BigArrow} />
        </button>
        <div className="screenshots_slider_container" ref={screenshotContRef}>
          {screenshots.map((screenshot) => (
            <button
              key={screenshot.id}
              className="screenshots_slider_button"
              onClick={(e) => {
                if (activeScreenshot === screenshot) return;
                startFadeAnimation();
                setTempScreenshot(activeScreenshot);
                setActiveScreenshot(screenshot);
                e.currentTarget.scrollIntoView({
                  behavior: 'smooth',
                  inline: 'center',
                  block: 'nearest',
                });
              }}
              onMouseDown={() => {
                stopFadeAnimation();
              }}
              style={
                activeScreenshot === screenshot
                  ? { outlineWidth: '3px', outlineStyle: 'solid' }
                  : { outline: 'none' }
              }
            >
              <img
                className="screenshots_slider_image"
                width={231}
                height={129}
                src={screenshot.path_thumbnail}
              />
            </button>
          ))}
        </div>
        <button
          className="slider_button"
          onClick={() => {
            screenshotContRef.current!.scrollBy(400, 0);
          }}
        >
          <img id="arrowRight" src={BigArrow} />
        </button>
      </div>
    </>
  );
};

export default ScreenshotsSlider;
