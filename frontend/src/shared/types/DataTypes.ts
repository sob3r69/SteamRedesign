type ScreenshotProps = {
  path_thumbnail: string;
};

type AppData = {
  name: string;
  short_description: string;
  screenshots: ScreenshotProps[];
  price_overview: PriceData;
};

type PriceData = {
  currency: string;
  discount_percent: number;
  initial: number;
  final: number;
  final_formatted: string;
  initial_formatted: string;
};

export type { ScreenshotProps, AppData, PriceData };
