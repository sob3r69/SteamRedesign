import { memo } from 'react';
import { Loading } from '@/shared/components';
import { ErrorHandler } from '..';
import BigGameCard from './variants/BigGameCard';
import SmallGameCard from './variants/SmallGameCard';
import { useAppDataFetch } from '@/entities/app/api';
import { Link, useNavigate } from 'react-router-dom';
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
          <Link to={`/app/${gameID}`} className="app_card">
            <BigGameCard data={data} />
          </Link>
        );
      case 'compact':
        return (
          <Link to={`/app/${gameID}`} className="app_card">
            <SmallGameCard data={data} type="compact" />
          </Link>
        );
      case 'wide':
        return (
          <Link to={`/app/${gameID}`} className="app_card">
            <SmallGameCard data={data} type="wide" />
          </Link>
        );
    }
});

export default AppCard;
