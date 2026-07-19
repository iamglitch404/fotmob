export interface LeagueDetailsOptions {
  /**
   * The league ID to fetch data for.
   * @example 47 // Premier League
   * @example 87 // La Liga
   */
  id: number;
  /**
   * Optional 3-letter country code for localization/filtering.
   */
  ccode3?: string;
}

export interface LeagueSeason {
  seasonName: string;
  winner?: {
    id: number;
    name: string;
    winner: boolean;
  };
  loser?: {
    id: number;
    name: string;
    winner: boolean;
  };
}

export interface LeagueOverview {
  season: string;
  selectedSeason: string;
  table: Array<{
    data: any; // We'll type TableData in table.types.ts and use it here later if needed
    tableFilterTypes: string[];
    teamForm: any;
    nextOpponent: any;
    tableHeader: any;
  }>;
  topPlayers: {
    goals: Array<{
      id: number;
      name: string;
      goals: number;
      teamName: string;
    }>;
    assists: Array<{
      id: number;
      name: string;
      assists: number;
      teamName: string;
    }>;
    rating: Array<{
      id: number;
      name: string;
      rating: number;
      teamName: string;
    }>;
  };
  hasTotw: boolean;
  leagueOverviewMatches: any[];
  hasOngoingMatch: boolean;
  shotMap: boolean;
  playoff?: any;
  matches?: any[];
}

export interface LeagueStats {
  players: Array<{
    header: string;
    topThree: Array<{
      id: number;
      name: string;
      teamId: number;
      teamName: string;
      value: number | string;
    }>;
  }>;
  teams: Array<{
    header: string;
    topThree: Array<{
      id: number;
      name: string;
      teamId: number;
      teamName: string;
      value: number | string;
    }>;
  }>;
  seasonStatLinks: Array<{
    Name: string;
    CountryCode: string;
    TournamentId: number;
  }>;
  seasonsWithLinks: string[];
}

export interface LeaguePlayoffRound {
  participantCount: number;
  stage: string;
  matchups: Array<{
    homeTeam: { id: number; name: string; score: number };
    awayTeam: { id: number; name: string; score: number };
    matchId: number;
  }>;
  started: boolean;
}

export interface LeaguePlayoff {
  rounds: LeaguePlayoffRound[];
  hasDrawOrder: boolean;
  special: boolean;
  liveFixtureApiLink: string;
  leagueId: number;
  bronzeFinal: boolean;
  draw: any;
}

export interface LeagueDetailsResponse {
  tabs: string[];
  allAvailableSeasons: string[];
  details: {
    id: number;
    type: string;
    name: string;
    selectedSeason: string;
    latestSeason: string;
    shortName: string;
    country: string;
    faqJSONLD: any;
    sportsicles?: any;
  };
  seostr: string;
  QAData: Array<{
    question: string;
    answer: string;
  }>;
  table: any[];
  transfers: {
    type: string;
    data: any[];
  };
  overview: LeagueOverview;
  stats: LeagueStats;
  playoff?: LeaguePlayoff;
  fixtures?: Array<{
    monthName: string;
    fixtures: Array<{
      id: number;
      monthYearKey: string;
      home: { id: number; name: string; score: number };
      away: { id: number; name: string; score: number };
      status: { utcTime: string; started: boolean; cancelled: boolean; finished: boolean };
    }>;
  }>;
  seasons?: LeagueSeason[];
}
