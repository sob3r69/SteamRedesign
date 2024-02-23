import { useAppDataFetch } from '@/shared/hooks';
import './SmallGameCard.scss';
import { Loading, PriceTag, WishlistButton } from '@/shared/components';

type SmallGameCardProps = {
  gameID: string;
  type?: 'compact' | 'wide';
};

const SmallGameCard = ({ gameID, type }: SmallGameCardProps) => {
  const { appData, error, isLoading } = useAppDataFetch(gameID);
  if (error) console.error(error);
  else if (type === 'wide')
    return (
      <div className="wide_gamecard_container">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="wide_gamecard_content">
            <img
              className="gamecard_cover"
              height={87}
              width={231}
              src={
                'https://cdn.cloudflare.steamstatic.com/steam/apps/' +
                gameID +
                '/capsule_231x87.jpg'
              }
            />
            <div className="wide_gamecard_info">
              <h2 className="wide_gamecard_title">{appData.name}</h2>
              <div className="gamecard_details_interactions">
                <div className="gamecard_details_platforms">platforms</div>
                <div className="gamecard_details_interactions_price">
                  <PriceTag priceData={appData.price_overview} />
                  <WishlistButton type="compact" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  else
    return (
      <div className="small_gamecard_container">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="small_gamecard_content">
            <img
              className="gamecard_cover"
              height={197}
              width={379}
              src={
                'https://cdn.cloudflare.steamstatic.com/steam/apps/' +
                gameID +
                '/capsule_616x353.jpg'
              }
            />
            <h2 className="small_gamecard_title">{appData.name}</h2>
            <div className="gamecard_details_interactions">
              <div className="gamecard_details_platforms">platforms</div>
              <div className="gamecard_details_interactions_price">
                <PriceTag priceData={appData.price_overview} />
                <WishlistButton type="compact" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default SmallGameCard;
