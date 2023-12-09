import { BuyButton, GameTag, PriceTag, WishlistButton } from '@/shared/components';
import './BigGameCard.scss';
import { useAppDataFetch } from '@/shared/hooks';
type BigGameCardProps = {
  gameID: string;
};

const BigGameCard = ({ gameID }: BigGameCardProps) => {
  const { appData, error } = useAppDataFetch(gameID);
  if (error) console.error(error);

  return (
    <div className="gamecard_container">
      <img
        className="gamecard_cover"
        width={766}
        height={458}
        src={'https://cdn.cloudflare.steamstatic.com/steam/apps/' + gameID + '/capsule_616x353.jpg'}
      />
      <div className="gamecard_details">
        <h2 className="gamecard_details_name">{appData.name}</h2>
        <h5 className="gamecard_details_description">{appData.short_description}</h5>
        <div className="gamecard_details_screenshots">
          <img width={231} height={111} src={appData.screenshots[0].path_thumbnail} />
          <img width={231} height={111} src={appData.screenshots[1].path_thumbnail} />
          <img width={231} height={111} src={appData.screenshots[2].path_thumbnail} />
          <img width={231} height={111} src={appData.screenshots[3].path_thumbnail} />
        </div>
        <div className="gamecard_details_tags">
          <GameTag name="Action" />
        </div>
        <div className="gamecard_details_interactions">
          <WishlistButton />
          <div className="gamecard_details_interactions_price">
            <PriceTag priceData={appData.price_overview} />
            <BuyButton text="Buy Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigGameCard;
