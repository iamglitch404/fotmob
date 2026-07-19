export interface TopScorersOptions {
  /**
   * The league ID for which to fetch all-time top scorers.
   * @example 77
   */
  leagueId: number;
}

export interface SeasonGoalStats {
  tournamentId: number;
  year: number;
  goals: number;
  penalties: number;
}

export interface TopScorerRow {
  id: number;
  teamId: number;
  name: string;
  position: string | null;
  rank: number;
  type: string;
  
  substatValue: {
    value: number;
    format: string;
    fractions: number;
  };
  
  statValue: {
    name: string;
    value: number;
    format: string;
    fractions: number;
  };
  
  seasonsWithGoals: SeasonGoalStats[];
}

export interface TopScorersResponse {
  subtitle: string;
  localizedSubtitleId: string;
  rows: TopScorerRow[];
}
