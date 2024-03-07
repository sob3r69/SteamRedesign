import { useParams } from 'react-router-dom';
import './AppPage.scss';
import { WishlistButton } from '@/shared/components';
import { Title } from '@/entities/app/ui';
import { useAppDataFetch } from '@/entities/app/api';

const AppPage = () => {
  const { appID } = useParams();

  const { data, error, isLoading } = useAppDataFetch(appID!);

  if (data)
    return (
      <div
        className="app_page_container"
        style={{
          backgroundImage: `url(${data.background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <div className="app_page_head">
          <Title text={data.name} />
          <div>
            <button>asd</button>
            <button>asd</button>
            <button>asd</button>
            <WishlistButton type="large" />
          </div>
        </div>
        <div className="app_page_description"></div>
        <div className="app_page_row">
          <div className="app_page_content"></div>
          <div className="app_page_info"></div>
        </div>
      </div>
    );
};

export default AppPage;
