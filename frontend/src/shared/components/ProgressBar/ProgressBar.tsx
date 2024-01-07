import { useEffect, useState } from 'react';
import './ProgressBar.scss';

type TimeSliderProps = {
  isActive: boolean;
  autoPlayTime: number;
};

const TimeSlider = ({ autoPlayTime, isActive }: TimeSliderProps) => {
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setFillWidth(0);
      return;
    }
    const timer = setInterval(() => {
      setFillWidth((prevWidth) => {
        const newWidth = prevWidth + 25.5;
        if (newWidth >= 100) {
          clearInterval(timer);
        }
        return newWidth;
      });
    }, autoPlayTime / 5);

    return () => {
      clearInterval(timer);
    };
  }, [autoPlayTime, isActive]);
  return (
    <div className="progress_container">
      <div className="progress_fill" style={{ width: `${fillWidth}%` }}></div>
    </div>
  );
};

export default TimeSlider;
