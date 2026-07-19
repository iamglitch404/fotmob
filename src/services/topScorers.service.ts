import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { TopScorersOptions, TopScorersResponse } from '../types/topScorers.types';

export const getTopScorers = async (options: TopScorersOptions): Promise<TopScorersResponse> => {
    return HttpClient.get<TopScorersResponse>(Endpoints.TOP_SCORERS, {
      leagueId: options.leagueId.toString()
    });
  }
