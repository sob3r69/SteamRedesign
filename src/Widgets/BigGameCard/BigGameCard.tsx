import axios from 'axios';
import { GameTag } from '@/shared/components';
import './BigGameCard.scss';
import { useEffect } from 'react';

type BigGameCardProps = {
  gameID: string;
};

const BigGameCard = ({ gameID }: BigGameCardProps) => {
  // useEffect(() => {
  //   // axios({
  //   //   method: 'get',
  //   //   url: 'https://store.steampowered.com/api/appdetails?appids=' + gameID,
  //   //   withCredentials: true,
  //   //   headers: {

  //   //   },
  //   // })
  //   //   .then((response) => {
  //   //     console.log(response.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error(error);
  //   //   });

  //   // fetch('https://store.steampowered.com/api/appdetails?appids=' + gameID, {
  //   //   mode: 'no-cors',
  //   // }).then((response) => {
  //   //   console.log(response);
  //   // });
  // }, []);
  return (
    <div className="gamecard_container">
      <img
        className="gamecard_cover"
        width={616}
        height={353}
        src={'https://cdn.cloudflare.steamstatic.com/steam/apps/' + gameID + '/capsule_616x353.jpg'}
      />
      <div className="gamecard_details">
        <h2>Call of Duty: Modern Warfare</h2>
        <h5>
          Пройдите захватывающую кампанию или соберите команду на уникальной онлайн-площадке с
          многочисленными испытаниями в 'Спецоперациях' в сочетании с сетевыми режимами и картами..
        </h5>
        <div className="gamecard_details_screenshots">
          <img
            width={231}
            height={111}
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/2000950/capsule_616x353.jpg?t=1678294805"
          />
          <img
            width={231}
            height={111}
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/2000950/capsule_616x353.jpg?t=1678294805"
          />
          <img
            width={231}
            height={111}
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/2000950/capsule_616x353.jpg?t=1678294805"
          />
          <img
            width={231}
            height={111}
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/2000950/capsule_616x353.jpg?t=1678294805"
          />
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
