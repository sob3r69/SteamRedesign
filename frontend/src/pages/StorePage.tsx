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
        <div style={{ marginTop: '10px' }}>
          <h2>TOP SELLERS</h2>
          <GamesSlider data={data} autoPlay={false} autoPlayTime={20000} type="page" />
        </div>
      </main>
    </>
  );
};

export default StorePage;
