import { useTopSellers } from '@/shared/hooks';
import { GamesSlider, SmallGameCard } from '@/widgets';

const StorePage = () => {
  // const { data, error } = useTopSellers();
  const appsEx = ['730', '632360', '570'];
  // if (error) console.error(error);
  return (
    <>
      <main>
        <div className="store-featured">
          <h2>FEATURED</h2>
          <GamesSlider apps={appsEx} autoPlay={true} autoPlayTime={5000} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
          {appsEx.map((appId: string) => (
            <SmallGameCard type="wide" gameID={appId} key={appId} />
          ))}
        </div>
      </main>
    </>
  );
};

export default StorePage;
