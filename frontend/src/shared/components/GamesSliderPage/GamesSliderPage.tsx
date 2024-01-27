import { SmallGameCard } from '@/widgets';
import './GamesSliderPage.scss';

type GamesSliderPageProps = {
  apps: string[][];
};

const GamesSliderPage = ({ apps }: GamesSliderPageProps) => {
  return (
    <>
      {apps.map((row, index) => (
        <div className="slider_page_row" key={'games_page_' + index}>
          {row.map((appID: string, index) => (
            <SmallGameCard type="wide" gameID={appID} key={'games_page_row_' + index} />
          ))}
        </div>
      ))}
    </>
  );
};

export default GamesSliderPage;
