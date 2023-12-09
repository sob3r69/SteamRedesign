import axios from 'axios';
import { useEffect, useState } from 'react';
import { AppData } from '@/shared/types';

const useAppDataFetch = (appID: string) => {
  const [error, setError] = useState<string | null>(null);
  const [appData, setAppData] = useState<AppData>({
    name: '',
    short_description: '',
    screenshots: [
      {
        path_thumbnail: '',
      },
      {
        path_thumbnail: '',
      },
      {
        path_thumbnail: '',
      },
      {
        path_thumbnail: '',
      },
    ],
    price_overview: {
      currency: '',
      discount_percent: 0,
      initial: 0,
      final: 0,
      final_formatted: '',
      initial_formatted: '',
    },
  });

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/game/' + appID,
      withCredentials: true,
    })
      .then((response) => {
        const data = response.data;
        setAppData(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, [appID]);
  return { appData, error };
};

export default useAppDataFetch;
