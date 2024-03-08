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
        <div className="app_page_description">
          <div className="row_container">
            <div className="app_page_description_image"></div>
            <div className="app_page_description_text"></div>
          </div>
        </div>
        <div className="app_page_row">
          <div className="app_page_content">
            <div className="app_page_buy">
              {/* There is gonna be a map render of buy options */}
            </div>
            <div className="app_page_about">
              {/* There is gonna be about page with screenshots and detailed description */}
            </div>
            <div className="app_page_system_requirements"></div>
          </div>
          <div className="app_page_info"></div>
        </div>
        <div className="app_page_similar"></div>
        <div className="app_page_reviews"></div>
      </div>
    );
};

export default AppPage;
