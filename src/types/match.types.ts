export interface MatchDataOptions {
  /**
   * The ID of the match to fetch data for.
   */
  id: number;
}

export interface MatchDataTeam {
  id: number;
  name: string;
  shortName: string;
  score: number;
}

export interface MatchDataStatusHalfs {
  firstHalfStarted: string;
  firstHalfEnded?: string;
  secondHalfStarted: string;
  secondHalfEnded?: string;
  firstExtraHalfStarted: string;
  secondExtraHalfStarted: string;
  gameEnded?: string;
}

export interface MatchDataStatusReason {
  short: string;
  shortKey: string;
  long: string;
  longKey: string;
}

export interface MatchDataStatus {
  utcTime: string;
  halfs: MatchDataStatusHalfs;
  periodLength: number;
  started: boolean;
  finished: boolean;
  cancelled: boolean;
  awarded?: boolean;
  /** Score string e.g. "1 - 2". Present when match is finished. */
  scoreStr?: string;
  /** Match reason e.g. "Full-Time". Present when match is finished. */
  reason?: MatchDataStatusReason;
}

export interface MatchDataLiveTime {
  short: string;
  shortKey: string;
  long: string;
  longKey: string;
}

export interface MatchDataStat {
  title: string;
  localizedTitle: string;
  /** Array of two values: [home, away] */
  stats: (number | string)[];
  highlighted?: 'home' | 'away';
  type: string;
  decimals?: number;
}

export interface MatchDataTeamColors {
  home: string;
  away: string;
}

export interface MatchDataTeamColorModes {
  darkMode: MatchDataTeamColors;
  lightMode: MatchDataTeamColors;
  fontDarkMode: MatchDataTeamColors;
  fontLightMode: MatchDataTeamColors;
}

export interface MatchDataStats {
  /** Array of head-to-head pre-match stats. */
  stats: MatchDataStat[];
  leagueIds: number[];
  leagueNames: string[];
  teamColors: MatchDataTeamColorModes;
}

export interface MatchDataResponse {
  id: number;
  home: MatchDataTeam;
  away: MatchDataTeam;
  /** Match date in local format e.g. "31.08.2025 01:30" */
  matchDate: string;
  homeScore: number;
  awayScore: number;
  status: MatchDataStatus;
  /** Relative URL to the match page e.g. "/matches/team-a-vs-team-b/slug#id" */
  pageUrl: string;
  /**
   * Odds data. Frequently null due to region blocking or timing.
   */
  odds: any | null;
  liveTime: MatchDataLiveTime | null;
  startDay: string | null;
  /**
   * Pre-match head-to-head stats. Null when match hasn't started yet.
   */
  stats: MatchDataStats | null;
}
