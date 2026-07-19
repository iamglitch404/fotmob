import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { AllLeaguesOptions, AllLeaguesResponse } from '../types/allLeagues.types';

export const getAllLeagues = async (options?: AllLeaguesOptions): Promise<AllLeaguesResponse> => {
    const params: Record<string, string> = {};
    if (options?.locale) params.locale = options.locale;
    if (options?.country) params.country = options.country;

    return HttpClient.get<AllLeaguesResponse>(Endpoints.ALL_LEAGUES, params);
  }
