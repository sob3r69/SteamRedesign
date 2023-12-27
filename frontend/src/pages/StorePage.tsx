import { BigGameCard, SmallGameCard } from '@/widgets';
import axios from 'axios';
import { useEffect, useState } from 'react';

const StorePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/top_sellers',
      withCredentials: true,
    }).then((response) => {
      const res = response.data;
      setData(res);
    });
  }, []);
  return (
    <>
      <main>
        <div className="store-featured">
          <h2>FEATURED</h2>
          <BigGameCard gameID="730" />
          <BigGameCard gameID="632360" />
        </div>
        <div>
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
