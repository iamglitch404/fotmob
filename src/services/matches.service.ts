import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { MatchesOptions, MatchesResponse } from '../types/matches.types';

export const getMatches = async (options: MatchesOptions): Promise<MatchesResponse> => {
    const params: Record<string, string> = {
      date: options.date,
    };

    if (options.timezone) params.timezone = options.timezone;
    if (options.ccode3) params.ccode3 = options.ccode3;
    if (options.includeNextDayLateNight !== undefined) {
      params.includeNextDayLateNight = options.includeNextDayLateNight.toString();
    }

    return HttpClient.get<MatchesResponse>(Endpoints.MATCHES, params);
  }
