import { Loading, PriceTag, WishlistButton } from '@/shared/components';
import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAppData } from '@/entities/app/api';
import { ErrorHandler } from '..';
import { BuyContainer, Cover, Info, Interactions, Platforms, Title } from '@/entities/app/ui';

type SmallGameCardProps = {
  gameID: string;
  type?: 'compact' | 'wide';
};

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
    <ErrorHandler type="compact" error={error} />;
  } else if (data)
    switch (type) {
      case 'wide':
        return (
          <div className="wide_gamecard_container">
            {isLoading ? (
              <Loading />
            ) : (
              <div className="wide_gamecard_content">
                <Cover type="wide" gameID={gameID} />
                <Info type={type}>
                  <Title text={data.name} />
                  <Interactions>
                    <Platforms />
                    <BuyContainer>
                      <PriceTag priceData={data.price_overview} />
                      <WishlistButton type="compact" />
                    </BuyContainer>
                  </Interactions>
                </Info>
              </div>
            )}
          </div>
        );
      case 'compact':
        return (
          <div className="small_gamecard_container">
            {isLoading ? (
              <Loading />
            ) : (
              <Info type={type}>
                <Cover type="compact" gameID={gameID} />
                <Title text={data.name} />
                <Interactions>
                  <Platforms />
                  <BuyContainer>
                    <PriceTag priceData={data.price_overview} />
                    <WishlistButton type="compact" />
                  </BuyContainer>
                </Interactions>
              </Info>
            )}
          </div>
        );
    }
});

export default SmallGameCard;
