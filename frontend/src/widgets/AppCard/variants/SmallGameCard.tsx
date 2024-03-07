import { PriceTag, WishlistButton } from '@/shared/components';
import { BuyContainer, Cover, Info, Interactions, Platforms, Title } from '@/entities/app/ui';
import { AppData } from '@/entities/app/types';

type SmallGameCardProps = {
  data: AppData;
  type?: 'compact' | 'wide';
};

// TODO: Need to refactor this component

/**
 * This component was memoized to improve performance on Slider state updates
 * @param type - 'compact' or 'wide'
 */
const SmallGameCard = ({ data, type }: SmallGameCardProps) => {
  switch (type) {
    case 'wide':
      return (
        <div className="wide_gamecard_container">
          <div className="wide_gamecard_content">
            <Cover type="wide" gameID={data.steam_appid.toString()} />
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
        </div>
      );
    case 'compact':
      return (
        <div className="small_gamecard_container">
          <Info type={type}>
            <Cover type="compact" gameID={data.steam_appid.toString()} />
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
      );
  }
};

export default SmallGameCard;
