import { Screenshot } from '../../types';

type ScreenshotsProps = {
  screenshots: Screenshot[];
};

const Screenshots = ({ screenshots }: ScreenshotsProps) => {
  return (
    <div className="gamecard_details_screenshots">
      <img width={231} height={111} src={screenshots[0].path_thumbnail} />
      <img width={231} height={111} src={screenshots[1].path_thumbnail} />
      <img width={231} height={111} src={screenshots[2].path_thumbnail} />
      <img width={231} height={111} src={screenshots[3].path_thumbnail} />
    </div>
  );
};

export default Screenshots;
