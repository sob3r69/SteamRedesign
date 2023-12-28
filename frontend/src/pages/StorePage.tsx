import { useTopSellers } from '@/shared/hooks';
import { BigGameCard, SmallGameCard } from '@/widgets';

const StorePage = () => {
  const { data, error } = useTopSellers();
  return (
    <>
      <main>
        <div className="store-featured">
          <h2>FEATURED</h2>
          <BigGameCard gameID="730" />
          <BigGameCard gameID="632360" />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {data.map((appId: string) => (
            <SmallGameCard gameID={appId} key={appId} />
          ))}
          {/* <SmallGameCard gameID="1587130" /> */}
        </div>
      </main>
    </>
  );
};

export default StorePage;
