import { PriceData } from '@/shared/types';
import './PriceTag.scss';
type PriceTagProps = {
  priceData: PriceData;
};

const PriceTag = ({ priceData }: PriceTagProps) => {
  console.log(priceData);
  return priceData ? (
    priceData.discount_percent === 0 ? (
      <h4 className="price_tag">{priceData.final_formatted}</h4>
    ) : (
      <section className="price_tag_discount">
        <h3 className="discount">-{priceData.discount_percent}%</h3>
        <section className="prices">
          <h3 className="initial_price">
            <del>{priceData.initial_formatted}</del>
          </h3>
          <h3 className="final_price">{priceData.final_formatted}</h3>
        </section>
      </section>
    )
  ) : (
    <h4 className="price_tag">Free</h4>
  );
};

export default PriceTag;