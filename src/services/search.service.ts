import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { SearchOptions, SearchResponse } from '../types/search.types';

export class SearchService {
  /**
   * Fetches search suggestions for a given term.
   * @param options Configuration for fetching search suggestions.
   * @returns A promise resolving to the search suggestions.
   */
  static async getSearchSuggestions(options: SearchOptions): Promise<SearchResponse> {
    return HttpClient.get<SearchResponse>(Endpoints.SEARCH, {
      term: options.term,
      hits: options.hits?.toString() || '50',
      lang: options.lang || 'en'
    });
  }
}
