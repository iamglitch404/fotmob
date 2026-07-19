import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { TeamOfTheWeekOptions, TeamOfTheWeekResponse, TeamOfTheWeekRoundsOptions, TeamOfTheWeekRoundsResponse } from '../types/totw.types';

export class TeamOfTheWeekService {
  /**
   * Fetches the Team of the Week (or Tournament) for a specific round/season.
   * @param options Configuration for fetching Team of the Week.
   * @returns A promise resolving to an array of Team of the Week players.
   */
  static async getTeamOfTheWeek(options: TeamOfTheWeekOptions): Promise<TeamOfTheWeekResponse> {
    return HttpClient.get<TeamOfTheWeekResponse>(Endpoints.TEAM_OF_THE_WEEK, {
      leagueId: options.leagueId.toString(),
      roundId: options.roundId,
      season: options.season
    });
  }

  /**
   * Fetches the available rounds for Team of the Week for a specific season.
   * @param options Configuration for fetching Team of the Week rounds.
   * @returns A promise resolving to the rounds payload.
   */
  static async getTeamOfTheWeekRounds(options: TeamOfTheWeekRoundsOptions): Promise<TeamOfTheWeekRoundsResponse> {
    return HttpClient.get<TeamOfTheWeekRoundsResponse>(Endpoints.TEAM_OF_THE_WEEK_ROUNDS, {
      leagueId: options.leagueId.toString(),
      season: options.season
    });
  }
}
