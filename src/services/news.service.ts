import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { TrendingNewsOptions, TrendingNewsResponse, TimelineNewsOptions, TimelineNewsResponse } from '../types/news.types';

export const getTrending = async (options?: TrendingNewsOptions): Promise<TrendingNewsResponse> => {
    const params: Record<string, string> = {};
    if (options?.lang) params.lang = options.lang;
    if (options?.ccode3) params.ccode3 = options.ccode3;

    return HttpClient.get<TrendingNewsResponse>(Endpoints.TRENDING_NEWS, params);
  }

  export const getTimelineNews = async (options: TimelineNewsOptions): Promise<TimelineNewsResponse> => {
    const params: Record<string, string> = {
      id: options.id.toString(),
      type: options.type,
      startIndex: options.startIndex?.toString() || '0'
    };
    if (options.language) params.language = options.language;

    return HttpClient.get<TimelineNewsResponse>(Endpoints.TIMELINE_NEWS, params);
  }
