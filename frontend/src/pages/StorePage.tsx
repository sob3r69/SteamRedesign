import { BigGameCard, SmallGameCard } from '@/widgets';

const StorePage = () => {
  return (
    <>
      <main>
        <div className="store-featured">
          <h2>FEATURED</h2>
          <BigGameCard gameID="730" />
          <BigGameCard gameID="632360" />
        </div>
        <div>
          <SmallGameCard gameID="1587130" />
        </div>
      </main>
    </>
  );
};

export default StorePage;
