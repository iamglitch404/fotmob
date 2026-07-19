import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { AllLeaguesOptions, AllLeaguesResponse } from '../types/allLeagues.types';

export class AllLeaguesService {
  /**
   * Fetches a complete list of all leagues, categorized by popular, international, and countries.
   * @param options Configuration for fetching all leagues.
   * @returns A promise resolving to the list of all leagues.
   */
  static async getAllLeagues(options?: AllLeaguesOptions): Promise<AllLeaguesResponse> {
    const params: Record<string, string> = {};
    if (options?.locale) params.locale = options.locale;
    if (options?.country) params.country = options.country;

    return HttpClient.get<AllLeaguesResponse>(Endpoints.ALL_LEAGUES, params);
  }
}
