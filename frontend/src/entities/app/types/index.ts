// type Screenshot = {
//   path_thumbnail: string;
// };

// type PriceData = {
//   currency: string;
//   discount_percent: number;
//   initial: number;
//   final: number;
//   final_formatted: string;
//   initial_formatted: string;
// };

// type AppData = {
//   name: string;
//   background: string;
//   short_description: string;
//   screenshots: Screenshot[];
//   header_image: string;
//   steam_appid: number;
//   release_date: {
//     coming_soon: boolean;
//     date: string;
//   };
//   price_overview: PriceData;
// };

// export type { Screenshot, AppData, PriceData };

export interface AppData {
  about_the_game: string;
  achievements: Achievements;
  background: string;
  background_raw: string;
  capsule_image: string;
  capsule_imagev5: string;
  categories: Category[];
  content_descriptors: ContentDescriptors;
  controller_support: string;
  detailed_description: string;
  developers: string[];
  dlc: number[];
  genres: Genre[];
  header_image: string;
  is_free: boolean;
  legal_notice: string;
  linux_requirements: LinuxRequirements;
  mac_requirements: MacRequirements;
  metacritic: Metacritic;
  movies: Movie[];
  name: string;
  package_groups: PackageGroup[];
  packages: number[];
  pc_requirements: PcRequirements;
  platforms: Platforms;
  price_overview: PriceOverview;
  publishers: string[];
  ratings: Ratings;
  recommendations: Recommendations;
  release_date: ReleaseDate;
  required_age: string;
  reviews: string;
  screenshots: Screenshot[];
  short_description: string;
  steam_appid: number;
  support_info: SupportInfo;
  supported_languages: string;
  type: string;
  website: string;
}

export interface Achievements {
  highlighted: Highlighted[];
  total: number;
}

export interface Highlighted {
  name: string;
  path: string;
}

export interface Category {
  description: string;
  id: number;
}

export interface ContentDescriptors {
  ids: number[];
  notes: string[];
}

export interface Genre {
  description: string;
  id: string;
}

export interface LinuxRequirements {
  minimum: string;
  recommended: string;
}

export interface MacRequirements {
  minimum: string;
  recommended: string;
}

export interface Metacritic {
  score: number;
  url: string;
}

export interface Movie {
  highlight: boolean;
  id: number;
  mp4: Mp4;
  name: string;
  thumbnail: string;
  webm: Webm;
}

export interface Mp4 {
  '480': string;
  max: string;
}

export interface Webm {
  '480': string;
  max: string;
}

export interface PackageGroup {
  description: string;
  display_type: number;
  is_recurring_subscription: string;
  name: string;
  save_text: string;
  selection_text: string;
  subs: Sub[];
  title: string;
}

export interface Sub {
  can_get_free_license: string;
  is_free_license: boolean;
  option_description: string;
  option_text: string;
  packageid: number;
  percent_savings: number;
  percent_savings_text: string;
  price_in_cents_with_discount: number;
}

export interface PcRequirements {
  minimum: string;
  recommended: string;
}

export interface Platforms {
  linux: boolean;
  mac: boolean;
  windows: boolean;
}

export interface PriceOverview {
  currency: string;
  discount_percent: number;
  final: number;
  final_formatted: string;
  initial: number;
  initial_formatted: string;
}

export interface Ratings {
  cero: Cero;
  crl: Crl;
  csrr: Csrr;
  dejus: Dejus;
  esrb: Esrb;
  fpb: Fpb;
  nzoflc: Nzoflc;
  pegi: Pegi;
  usk: Usk;
}

export interface Cero {
  descriptors: string;
  rating: string;
  required_age: string;
  use_age_gate: string;
}

export interface Crl {
  rating: string;
  required_age: string;
  use_age_gate: string;
}

export interface Csrr {
  rating: string;
  required_age: string;
  use_age_gate: string;
}

export interface Dejus {
  descriptors: string;
  rating: string;
  required_age: string;
  use_age_gate: string;
}

export interface Esrb {
  descriptors: string;
  rating: string;
  required_age: string;
  use_age_gate: string;
}

export interface Fpb {
  rating: string;
  required_age: string;
  use_age_gate: string;
}

export interface Nzoflc {
  descriptors: string;
  rating: string;
  required_age: string;
  use_age_gate: string;
}

export interface Pegi {
  descriptors: string;
  rating: string;
  required_age: string;
  use_age_gate: string;
}

export interface Usk {
  rating: string;
  required_age: string;
  use_age_gate: string;
}

export interface Recommendations {
  total: number;
}

export interface ReleaseDate {
  coming_soon: boolean;
  date: string;
}

export interface Screenshot {
  id: number;
  path_full: string;
  path_thumbnail: string;
}

export interface SupportInfo {
  email: string;
  url: string;
}
