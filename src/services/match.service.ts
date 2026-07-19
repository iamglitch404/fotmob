import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { MatchDataOptions, MatchDataResponse } from '../types/match.types';

export const getMatch = async (options: MatchDataOptions): Promise<MatchDataResponse> => {
    const params: Record<string, string> = {
      id: options.id.toString(),
    };

    return HttpClient.get<MatchDataResponse>(Endpoints.MATCH, params);
  }
