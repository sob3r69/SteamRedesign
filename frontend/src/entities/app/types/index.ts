type Screenshot = {
  path_thumbnail: string;
};

type PriceData = {
  currency: string;
  discount_percent: number;
  initial: number;
  final: number;
  final_formatted: string;
  initial_formatted: string;
};

type AppData = {
  name: string;
  short_description: string;
  screenshots: Screenshot[];
  price_overview: PriceData;
};

export type { Screenshot, AppData, PriceData };
