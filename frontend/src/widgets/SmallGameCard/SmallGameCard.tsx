import './SmallGameCard.scss';
import { Loading, PriceTag, WishlistButton } from '@/shared/components';
import { memo } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

type SmallGameCardProps = {
  gameID: string;
  type?: 'compact' | 'wide';
};

async function getAppData(gameID: string) {
  const { data } = await axios.get(`http://localhost:3000/app/${gameID}`);
  return data;
}

/**
 * This component was memoized to improve performance on Slider state updates
 * @param type - 'compact' or 'wide'
 */
const SmallGameCard = memo(({ gameID, type }: SmallGameCardProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['app', gameID],
    queryFn: () => getAppData(gameID),
  });

  // TODO: Add error handling
  // This is a temporary solution to handle errors
  if (error) {
    console.error(error);
    if (type === 'wide')
      return (
        <div className="wide_gamecard_container">
          <Loading />
        </div>
      );
    else if (type === 'compact') {
      return (
        <div className="small_gamecard_container">
          <Loading />
        </div>
      );
    }
  } else if (type === 'wide')
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
              <h2 className="wide_gamecard_title">{data.name}</h2>
              <div className="gamecard_details_interactions">
                <div className="gamecard_details_platforms">platforms</div>
                <div className="gamecard_details_interactions_price">
                  <PriceTag priceData={data.price_overview} />
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
            <h2 className="small_gamecard_title">{data.name}</h2>
            <div className="gamecard_details_interactions">
              <div className="gamecard_details_platforms">platforms</div>
              <div className="gamecard_details_interactions_price">
                <PriceTag priceData={data.price_overview} />
                <WishlistButton type="compact" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
});

export default SmallGameCard;
