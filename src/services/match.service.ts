import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { MatchDataOptions, MatchDataResponse } from '../types/match.types';

export class MatchService {
  /**
   * Fetches match data for a specific match.
   *
   * Returns full match info including teams, scores, status, liveTime,
   * and pre-match head-to-head stats (when available).
   *
   * @param options - Configuration for the match request.
   * @returns A promise resolving to the match data.
   */
  static async getMatch(options: MatchDataOptions): Promise<MatchDataResponse> {
    const params: Record<string, string> = {
      id: options.id.toString(),
    };

    return HttpClient.get<MatchDataResponse>(Endpoints.MATCH, params);
  }
}
