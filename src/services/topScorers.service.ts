import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { TopScorersOptions, TopScorersResponse } from '../types/topScorers.types';

export class TopScorersService {
  /**
   * Fetches the all-time top scorers for a specific league.
   * @param options Configuration for fetching top scorers.
   * @returns A promise resolving to the top scorers payload.
   */
  static async getTopScorers(options: TopScorersOptions): Promise<TopScorersResponse> {
    return HttpClient.get<TopScorersResponse>(Endpoints.TOP_SCORERS, {
      leagueId: options.leagueId.toString()
    });
  }
}
