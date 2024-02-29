import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAppData } from '@/entities/app/api';
import { Loading } from '@/shared/components';
import { ErrorHandler } from '..';
import BigGameCard from './variants/BigGameCard';
import SmallGameCard from './variants/SmallGameCard';

type AppCardProps = {
  gameID: string;
  type: 'compact' | 'wide' | 'big';
};

const AppCard = memo(({ type, gameID }: AppCardProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['app', gameID],
    queryFn: () => getAppData(gameID),
    refetchOnWindowFocus: false,
  });
  if (error) return <ErrorHandler type={type} error={error} />;
  else if (isLoading) return <Loading type={type} />;
  else if (data)
    switch (type) {
      case 'big':
        return <BigGameCard data={data} />;
      case 'compact':
        return <SmallGameCard data={data} type="compact" />;
      case 'wide':
        return <SmallGameCard data={data} type="wide" />;
    }
});

export default AppCard;
