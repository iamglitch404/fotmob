import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { TrendingNewsOptions, TrendingNewsResponse, TimelineNewsOptions, TimelineNewsResponse } from '../types/news.types';

export class NewsService {
  /**
   * Fetches trending news articles globally or localized by country.
   * @param options Configuration for fetching trending news.
   * @returns A promise resolving to an array of trending news articles.
   */
  static async getTrending(options?: TrendingNewsOptions): Promise<TrendingNewsResponse> {
    const params: Record<string, string> = {};
    if (options?.lang) params.lang = options.lang;
    if (options?.ccode3) params.ccode3 = options.ccode3;

    return HttpClient.get<TrendingNewsResponse>(Endpoints.TRENDING_NEWS, params);
  }

  /**
   * Fetches timeline news for a specific league, team, or player.
   * @param options Configuration for fetching timeline news.
   * @returns A promise resolving to the timeline news payload.
   */
  static async getTimelineNews(options: TimelineNewsOptions): Promise<TimelineNewsResponse> {
    const params: Record<string, string> = {
      id: options.id.toString(),
      type: options.type,
      startIndex: options.startIndex?.toString() || '0'
    };
    if (options.language) params.language = options.language;

    return HttpClient.get<TimelineNewsResponse>(Endpoints.TIMELINE_NEWS, params);
  }
}
