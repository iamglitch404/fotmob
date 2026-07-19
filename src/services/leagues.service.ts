import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { LeagueDetailsOptions, LeagueDetailsResponse } from '../types/leagues.types';

export const getLeagueDetails = async (options: LeagueDetailsOptions): Promise<LeagueDetailsResponse> => {
    const params: Record<string, string> = { id: options.id.toString() };
    if (options.ccode3) params.ccode3 = options.ccode3;

    return HttpClient.get<LeagueDetailsResponse>(Endpoints.LEAGUE_DETAILS, params);
  }
