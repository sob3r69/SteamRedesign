import { PriceData } from '@/entities/app/types';
import './PriceTag.scss';
type PriceTagProps = {
  priceData: PriceData;
};

const PriceTag = ({ priceData }: PriceTagProps) => {
  return priceData ? (
    priceData.discount_percent === 0 ? (
      <h3 className="price_tag">{priceData.final_formatted}</h3>
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
    <h3 className="price_tag_free">Free</h3>
  );
};

export default PriceTag;
