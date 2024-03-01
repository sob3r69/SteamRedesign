import { useParams } from 'react-router-dom';
import style from './AppPage.module.scss';
import { WishlistButton } from '@/shared/components';
import { Title } from '@/entities/app/ui';

const AppPage = () => {
  const { appID } = useParams();
  return (
    <div className={style.container}>
      <div className={style.head}>
        <Title text={`App ${appID}`} />
        <div>
          <button>asd</button>
          <button>asd</button>
          <button>asd</button>
          <WishlistButton type="large" />
        </div>
      </div>
    </div>
  );
};

export default AppPage;
