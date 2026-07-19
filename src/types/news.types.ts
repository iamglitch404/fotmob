export interface TrendingNewsOptions {
  /**
   * The language code for the news.
   * @example 'en'
   */
  lang?: string;
  /**
   * Country code for localized news.
   * @example 'GBR'
   */
  ccode3?: string;
}

export interface NewsArticle {
  id: string;
  imageUrl: string;
  title: string;
  gmtTime: string;
  sourceStr: string;
  sourceIconUrl: string;
  page: {
    url: string;
  };
  language?: string;
  lead?: string;
}

export type TrendingNewsResponse = NewsArticle[];

export interface TimelineNewsOptions {
  /**
   * ID of the league, team, or player.
   * @example 77
   */
  id: number;
  /**
   * The type of entity the ID belongs to.
   * @example 'league'
   */
  type: 'league' | 'team' | 'player';
  /**
   * Language code.
   * @example 'en'
   */
  language?: string;
  /**
   * Pagination start index. Defaults to 0.
   */
  startIndex?: number;
}

export interface TimelineNewsResponse {
  data: NewsArticle[];
  totalItems: number;
}
