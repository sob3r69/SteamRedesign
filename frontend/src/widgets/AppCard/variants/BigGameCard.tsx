import { BuyButton, PriceTag, WishlistButton } from '@/shared/components';
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
import { AppData } from '@/entities/app/types';

type BigGameCardProps = {
  data: AppData;
};

const BigGameCard = ({ data }: BigGameCardProps) => {
  return (
    <div className="gamecard_container">
      <Cover type="big" gameID={data.steam_appid.toString()} />
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
    </div>
  );
};

export default BigGameCard;
