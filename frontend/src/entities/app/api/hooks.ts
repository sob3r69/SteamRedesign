import { useQuery } from '@tanstack/react-query';
import { getAppData } from './funcs';

const useAppDataFetch = (gameID: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['app', gameID],
    queryFn: () => getAppData(gameID),
    refetchOnWindowFocus: false,
  });

  return { data, error, isLoading };
};

export { useAppDataFetch };
