import axios from 'axios';
import { useEffect, useState } from 'react';

/**
 * Custom React hook to fetch top sellers data
 * @returns The fetched top sellers data and any potential error
 */

const useTopSellers = () => {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/top_sellers',
      withCredentials: true,
    })
      .then((response) => {
        const res = response.data;
        setData(res);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, []);
  return { data, error };
};

export default useTopSellers;
