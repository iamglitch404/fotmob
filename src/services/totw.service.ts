import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { TeamOfTheWeekOptions, TeamOfTheWeekResponse, TeamOfTheWeekRoundsOptions, TeamOfTheWeekRoundsResponse } from '../types/totw.types';

export const getTeamOfTheWeek = async (options: TeamOfTheWeekOptions): Promise<TeamOfTheWeekResponse> => {
    return HttpClient.get<TeamOfTheWeekResponse>(Endpoints.TEAM_OF_THE_WEEK, {
      leagueId: options.leagueId.toString(),
      roundId: options.roundId,
      season: options.season
    });
  }

  export const getTeamOfTheWeekRounds = async (options: TeamOfTheWeekRoundsOptions): Promise<TeamOfTheWeekRoundsResponse> => {
    return HttpClient.get<TeamOfTheWeekRoundsResponse>(Endpoints.TEAM_OF_THE_WEEK_ROUNDS, {
      leagueId: options.leagueId.toString(),
      season: options.season
    });
  }
