import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { LiveFixturesOptions, LiveFixturesResponse } from '../types/liveFixtures.types';

export const getLiveFixtures = async (options?: LiveFixturesOptions): Promise<LiveFixturesResponse> => {
    // The endpoint expects a query param `url` which acts as a proxy for the internal pub endpoint
    let internalUrl = 'https://pub.fotmob.com/prod/db/api/fixture/live';
    if (options?.leagueId) {
      internalUrl += `?leagueId=${options.leagueId}`;
    }

    return HttpClient.get<LiveFixturesResponse>(Endpoints.LIVE_FIXTURES, {
      url: internalUrl
    });
  }
