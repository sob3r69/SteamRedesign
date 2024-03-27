import { useParams } from 'react-router-dom';
import './AppPage.scss';
import { AppTag, WishlistButton } from '@/shared/components';
import { Title } from '@/entities/app/ui';
import { useAppDataFetch } from '@/entities/app/api';
import { ScreenshotsSlider } from '@/widgets';

const AppPage = () => {
  const { appID } = useParams();

  const { data, error, isLoading } = useAppDataFetch(appID!);

  console.log(data?.package_groups);

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
        <div className="app_page_overview">
          <div className="app_page_overview_image">
            <ScreenshotsSlider screenshots={data.screenshots} />
          </div>
          <div className="app_page_overview_description">
            <img width={416} src={data.header_image} />
            {data.short_description}
            <div className="app_page_overview_description_reviews">
              <h5 className="dim_text">Reviews</h5>
            </div>
            <div className="app_page_overview_description_row">
              <h5 className="dim_text">Release Date</h5>
              <h5>{data.release_date.date}</h5>
            </div>
            <div className="app_page_overview_description_row">
              <h5 className="dim_text">Developer</h5>
              <h5>{data.developers.join(', ')}</h5>
            </div>
            <div className="app_page_overview_description_row">
              <h5 className="dim_text">Publisher</h5>
              <h5>{data.publishers.join(', ')}</h5>
            </div>
            <h5 className="dim_text">Popular Tags</h5>
            <div className="app_page_overview_description_tags">
              {data.genres.map((genre) => (
                <AppTag key={`genre_${genre.id}`} name={genre.description} />
              ))}
            </div>
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
