import { useTopSellers } from '@/shared/hooks';
import { GamesSlider } from '@/widgets';

const StorePage = () => {
  const { data, error } = useTopSellers();
  const appsEx = ['730', '632360', '570'];
  if (error) console.error(error);
  return (
    <>
      <main>
        <div className="store-featured">
          <h2>FEATURED</h2>
          <GamesSlider data={appsEx} autoPlay={true} autoPlayTime={5000} type="slide" />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
          {/* <GamesSlider data={data} autoPlay={true} autoPlayTime={5000} type="page" /> */}
          {/* {appsEx.map((appId: string) => (
            <SmallGameCard type="wide" gameID={appId} key={appId} />
          ))} */}
        </div>
      </main>
    </>
  );
};

export default StorePage;
