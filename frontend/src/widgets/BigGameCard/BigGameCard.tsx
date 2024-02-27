import { memo } from 'react';
import { ErrorHandler } from '..';
import { useQuery } from '@tanstack/react-query';
import { getAppData } from '@/entities/app/api';
import { BuyButton, Loading, PriceTag, WishlistButton } from '@/shared/components';
import {
  BuyContainer,
  Cover,
  Description,
  Info,
  Interactions,
  Screenshots,
  Tags,
  Title,
} from '@/entities/app/ui';

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
  } else if (data) {
    return (
      <div className="gamecard_container">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Cover type="big" gameID={gameID} />
            <Info type="big">
              <Title text={data.name} />
              <Description text={data.short_description} />
              <Screenshots screenshots={data.screenshots} />
              <Tags />
              <Interactions>
                <WishlistButton />
                <BuyContainer>
                  <PriceTag priceData={data.price_overview} />
                  <BuyButton text="Buy Now" />
                </BuyContainer>
              </Interactions>
            </Info>
          </>
        )}
      </div>
    );
  }
});

export default BigGameCard;
