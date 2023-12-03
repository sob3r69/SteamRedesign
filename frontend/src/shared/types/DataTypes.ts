type ScreenshotProps = {
  path_thumbnail: string;
};

type AppData = {
  name: string;
  short_description: string;
  screenshots: ScreenshotProps[];
  price_overview: {
    currency: string;
    initial: number;
    final: number;
    final_formatted: string;
  };
};

export type { ScreenshotProps, AppData };
