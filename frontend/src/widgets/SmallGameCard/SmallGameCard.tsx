import { useAppDataFetch } from '@/shared/hooks';
import './SmallGameCard.scss';
import { PriceTag, WishlistButton } from '@/shared/components';

type SmallGameCardProps = {
  gameID: string;
};

const SmallGameCard = ({ gameID }: SmallGameCardProps) => {
  const { appData, error } = useAppDataFetch(gameID);
  if (error) console.error(error);
  return (
    <div className="small_gamecard_container">
      <div className="small_gamecard_content">
        <img
          className="gamecard_cover"
          height={197}
          width={379}
          src={
            'https://cdn.cloudflare.steamstatic.com/steam/apps/' + gameID + '/capsule_616x353.jpg'
          }
        />
        <h2 className="small_gamecard_title">{appData.name}</h2>
        <div className="gamecard_details_interactions">
          <div className="gamecard_details_platforms">todo platforms</div>
          <div className="gamecard_details_interactions_price">
            <PriceTag priceData={appData.price_overview} />
            <WishlistButton type="compact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallGameCard;
