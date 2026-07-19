import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { SearchOptions, SearchResponse } from '../types/search.types';

export const getSearchSuggestions = async (options: SearchOptions): Promise<SearchResponse> => {
    return HttpClient.get<SearchResponse>(Endpoints.SEARCH, {
      term: options.term,
      hits: options.hits?.toString() || '50',
      lang: options.lang || 'en'
    });
  }
