export interface TeamOptions {
  /**
   * The team ID.
   * @example 8633 // Real Madrid
   */
  id: number;
  /**
   * Optional 3-letter country code.
   */
  ccode3?: string;
  /**
   * Tab to fetch (e.g. "overview", "squad", "fixtures", "history", "stats").
   */
  tab?: string;
}

export interface TeamMember {
  id: number;
  height: number | null;
  age: number;
  dateOfBirth: string;
  name: string;
  ccode: string;
  cname: string;
  role: {
    key: string;
    fallback: string;
  };
  excludeFromRanking?: boolean;
  shirtNumber?: number;
  rating?: number;
  goals?: number;
  assists?: number;
  injured?: boolean;
}

export interface TeamSquadPosition {
  title: string;
  members: TeamMember[];
}

export interface TeamSquad {
  squad: TeamSquadPosition[];
  isNationalTeam: boolean;
}

export interface TeamHistory {
  trophyList: Array<{
    name: string;
    seasons: string[];
  }>;
  historicalTableData: any; // Complex table object
  teamColorMap: any;
  tables: any;
  coachHistory: Array<{
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
  }>;
  teamColors: any;
}

export interface TeamFixture {
  monthName: string;
  fixtures: Array<{
    id: number;
    monthYearKey: string;
    home: { id: number; name: string; score: number };
    away: { id: number; name: string; score: number };
    status: { utcTime: string; started: boolean; cancelled: boolean; finished: boolean };
  }>;
}

export interface TeamOverview {
  season: string;
  selectedSeason: string;
  venue: {
    name: string;
    city: string;
    capacity: number;
  };
  coachHistory: any;
  overviewFixtures: Array<{
    id: number;
    home: { id: number; name: string; score: number };
    away: { id: number; name: string; score: number };
    status: any;
  }>;
  nextMatch: any;
  lastMatch: any;
  teamForm: any;
  hasOngoingMatch: boolean;
  teamColors: any;
}

export interface TeamResponse {
  tabs: string[];
  allAvailableSeasons: string[];
  details: {
    id: number;
    type: string;
    name: string;
    latestSeason: string;
    shortName: string;
    country: string;
    primaryLeagueId: number;
    primaryLeagueName: string;
  };
  seostr: string;
  QAData: Array<{
    question: string;
    answer: string;
  }>;
  table: any[];
  transfers: any;
  overview: TeamOverview;
  stats: any;
  fixtures: TeamFixture[];
  squad: TeamSquad;
  history: TeamHistory;
}
