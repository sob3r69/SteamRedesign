import axios from 'axios';
import { GameTag } from '@/shared/components';
import './BigGameCard.scss';
import { useEffect, useState } from 'react';

type BigGameCardProps = {
  gameID: string;
};

type ScreenshotProps = {
  path_thumbnail: string;
};

const BigGameCard = ({ gameID }: BigGameCardProps) => {
  const [appName, setAppName] = useState('');
  const [appDescription, setAppDescription] = useState('');
  const [appScreenshots, setAppScreenshots] = useState<ScreenshotProps[]>([
    { path_thumbnail: '' },
    { path_thumbnail: '' },
    { path_thumbnail: '' },
    { path_thumbnail: '' },
  ]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/game/' + gameID,
      withCredentials: true,
    })
      .then((response) => {
        console.log(response.data);
        setAppName(response.data.name);
        setAppDescription(response.data.short_description);
        setAppScreenshots(response.data.screenshots);
        console.log(appScreenshots);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="gamecard_container">
      <img
        className="gamecard_cover"
        width={616}
        height={353}
        src={'https://cdn.cloudflare.steamstatic.com/steam/apps/' + gameID + '/capsule_616x353.jpg'}
      />
      <div className="gamecard_details">
        <h2>{appName}</h2>
        <h5>{appDescription}</h5>
        <div className="gamecard_details_screenshots">
          <img width={231} height={111} src={appScreenshots[0].path_thumbnail} />
          <img width={231} height={111} src={appScreenshots[1].path_thumbnail} />
          <img width={231} height={111} src={appScreenshots[2].path_thumbnail} />
          <img width={231} height={111} src={appScreenshots[3].path_thumbnail} />
        </div>
        <div className="gamecard_details_tags">
          <GameTag name="Action" />
        </div>
        <div className="gamecard_details_price">price</div>
      </div>
    </div>
  );
};

export default BigGameCard;
