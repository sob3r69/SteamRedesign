import { memo } from 'react';
import { Loading } from '@/shared/components';
import { ErrorHandler } from '..';
import BigGameCard from './variants/BigGameCard';
import SmallGameCard from './variants/SmallGameCard';
import { useAppDataFetch } from '@/entities/app/api';
import { useNavigate } from 'react-router-dom';
import './AppCard.scss';

type AppCardProps = {
  gameID: string;
  type: 'compact' | 'wide' | 'big';
};

const AppCard = memo(({ type, gameID }: AppCardProps) => {
  const { data, error, isLoading } = useAppDataFetch(gameID);
  const navigate = useNavigate();

  if (error) return <ErrorHandler type={type} error={error} />;
  else if (isLoading) return <Loading type={type} />;
  else if (data)
    switch (type) {
      case 'big':
        return (
          <button className="app_card" onClick={() => navigate(`/app/${gameID}`)}>
            <BigGameCard data={data} />
          </button>
        );
      case 'compact':
        return (
          <button className="app_card" onClick={() => navigate(`/app/${gameID}`)}>
            <SmallGameCard data={data} type="compact" />
          </button>
        );
      case 'wide':
        return (
          <button className="app_card" onClick={() => navigate(`/app/${gameID}`)}>
            <SmallGameCard data={data} type="wide" />
          </button>
        );
    }
});

export default AppCard;
