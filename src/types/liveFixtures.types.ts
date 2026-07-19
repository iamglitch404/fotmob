export interface LiveFixturesOptions {
  /**
   * The league ID to fetch live fixtures for.
   * If omitted, might fetch global live fixtures (depending on Fotmob API behavior).
   * @example 77
   */
  leagueId?: number;
}

export interface LiveFixtureLeague {
  primaryLeagueId: number;
  leagueId: number;
  leagueName: string;
  parentLeagueId: number;
  stageId: number;
  tournamentId: number;
  isCup: boolean;
  countryCode: string;
}

export interface LiveFixtureMatch {
  matchId: number;
  homeId: number;
  awayId: number;
  homeScore: number;
  awayScore: number;
  homeName: string;
  awayName: string;
  matchDateUtc: string;
  league: LiveFixtureLeague;
  round: string;
  statusId: number;
  status: string;
  homeShortName: string;
  awayShortName: string;
}

export interface LiveFixturesResponse {
  matches: LiveFixtureMatch[];
}
