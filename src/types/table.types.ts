export interface LeagueTableOptions {
  /** 
   * The Fotmob League ID (e.g., 87 for LaLiga).
   */
  leagueId: number;
}

export interface TableLegend {
  title: string;
  tKey: string;
  color: string;
  indices: number[];
}

export interface TableTeamData {
  name: string;
  shortName: string;
  id: number;
  pageUrl: string;
  featuredInMatch: boolean;
  deduction: number | null;
  ongoing: Array<{
    home: { id: number; name: string; score: number };
    away: { id: number; name: string; score: number };
    status: { utcTime: string; started: boolean; cancelled: boolean; finished: boolean };
    matchId: number;
  }> | null;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  scoresStr: string; // e.g. "0-0"
  goalConDiff: number;
  goalsScored?: number;
  pts: number;
  idx: number;
  qualColor: string | null;
}

export interface LeagueTableResponse {
  ccode: string;
  leagueId: number;
  pageUrl: string;
  leagueName: string;
  legend: TableLegend[];
  ongoing: Array<{
    home: { id: number; name: string; score: number };
    away: { id: number; name: string; score: number };
    status: { utcTime: string; started: boolean; cancelled: boolean; finished: boolean };
    matchId: number;
  }>;
  table: {
    all: TableTeamData[];
    home: TableTeamData[];
    away: TableTeamData[];
  };
  tableFilterTypes: string[];
  composite: boolean;
  selectedSeason: string;
  isCurrentSeason: string;
}
