import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { LeagueDetailsOptions, LeagueDetailsResponse } from '../types/leagues.types';

export class LeaguesService {
  /**
   * Fetches comprehensive details for a specific league.
   * @param options Configuration containing the league ID.
   * @returns A promise resolving to the league details payload.
   */
  static async getLeagueDetails(options: LeagueDetailsOptions): Promise<LeagueDetailsResponse> {
    const params: Record<string, string> = { id: options.id.toString() };
    if (options.ccode3) params.ccode3 = options.ccode3;

    return HttpClient.get<LeagueDetailsResponse>(Endpoints.LEAGUE_DETAILS, params);
  }
}
