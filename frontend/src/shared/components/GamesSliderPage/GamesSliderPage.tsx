import { divideArray } from '@/shared/helpers';
import { SmallGameCard } from '@/widgets';

import './GamesSliderPage.scss';
import { useEffect, useMemo } from 'react';

type GamesSliderPageProps = {
  apps: string[][];
};

const GamesSliderPage = ({ apps }: GamesSliderPageProps) => {
  // const data = divideArray(apps, 4);
  // console.log(data.length);
  // console.log(data);
  // console.log(data[0]);
  return (
    <div className="games_slider_page">
      {apps.map((row) => (
        <div className="slider_page_row">
          {row.map((appID: string) => (
            <SmallGameCard type="wide" gameID={appID} key={appID} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GamesSliderPage;
