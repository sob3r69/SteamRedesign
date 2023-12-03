type ScreenshotProps = {
  path_thumbnail: string;
};

type AppData = {
  name: string;
  short_description: string;
  screenshots: ScreenshotProps[];
};

export type { ScreenshotProps, AppData };
