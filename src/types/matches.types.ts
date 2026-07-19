export interface MatchesOptions {
  /** 
   * Date in YYYYMMDD format.
   * @example '20260719' 
   */
  date: string;
  
  /** 
   * Timezone of the user.
   * @example 'America/New_York' or 'Asia/Katmandu'
   */
  timezone?: string;
  
  /** 
   * 3-letter country code (ISO 3166-1 alpha-3).
   * @example 'NPL', 'USA'
   */
  ccode3?: string;

  /**
   * Include matches late at night.
   */
  includeNextDayLateNight?: boolean;
}

export interface MatchTeam {
  id: number;
  score: number;
  name: string;
  longName: string;
}

export interface MatchStatus {
  utcTime: string;
  finished: boolean;
  started: boolean;
  cancelled: boolean;
  scoreStr?: string;
  reason?: {
    short: string;
    shortKey: string;
    long: string;
    longKey: string;
  };
}

export interface MatchItem {
  id: number;
  leagueId: number;
  time: string; // e.g. "18.07.2026 23:00"
  home: MatchTeam;
  away: MatchTeam;
  statusId: number;
  tournamentStage: string;
  status: MatchStatus;
  timeTS: number;
}

export interface MatchesLeague {
  ccode: string;
  id: number;
  primaryId: number;
  name: string;
  matches: MatchItem[];
}

export interface MatchesResponse {
  leagues: MatchesLeague[];
}
