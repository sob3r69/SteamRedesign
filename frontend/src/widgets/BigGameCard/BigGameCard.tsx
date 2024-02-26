import { BuyButton, GameTag, Loading, PriceTag, WishlistButton } from '@/shared/components';
import './BigGameCard.scss';
import { memo } from 'react';
import { ErrorHandler } from '..';
import { useQuery } from '@tanstack/react-query';
import { getAppData } from '@/entities/app/api';
type BigGameCardProps = {
  gameID: string;
};

/**
 * This component was memoized to improve performance on Slider state updates
 */
const BigGameCard = memo(({ gameID }: BigGameCardProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['app', gameID],
    queryFn: () => getAppData(gameID),
  });
  if (error) {
    return <ErrorHandler type="big" error={error} />;
  } else {
    return (
      <div className="gamecard_container">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <img
              className="gamecard_cover"
              width={766}
              height={458}
              src={
                'https://cdn.cloudflare.steamstatic.com/steam/apps/' +
                gameID +
                '/capsule_616x353.jpg'
              }
            />
            <div className="gamecard_details">
              <h2 className="gamecard_details_name">{data.name}</h2>
              <h5 className="gamecard_details_description">{data.short_description}</h5>
              <div className="gamecard_details_screenshots">
                <img width={231} height={111} src={data.screenshots[0].path_thumbnail} />
                <img width={231} height={111} src={data.screenshots[1].path_thumbnail} />
                <img width={231} height={111} src={data.screenshots[2].path_thumbnail} />
                <img width={231} height={111} src={data.screenshots[3].path_thumbnail} />
              </div>
              <div className="gamecard_details_tags">
                <GameTag name="Action" />
              </div>
              <div className="gamecard_details_interactions">
                <WishlistButton />
                <div className="gamecard_details_interactions_price">
                  <PriceTag priceData={data.price_overview} />
                  <BuyButton text="Buy Now" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
});

export default BigGameCard;
