export interface SearchOptions {
  /**
   * The search term.
   * @example "messi" or "real madrid"
   */
  term: string;
  /**
   * Number of hits to return. Defaults to 50.
   */
  hits?: number;
  /**
   * Language code. Defaults to 'en'.
   */
  lang?: string;
}

export interface SearchPlayerSuggestion {
  type: 'player';
  id: string;
  score: number;
  name: string;
  isCoach: boolean;
  teamId: number;
  teamName: string;
}

export interface SearchTeamSuggestion {
  type: 'team';
  id: string;
  score: number;
  name: string;
  leagueId: number;
  leagueName: string;
}

export interface SearchMatchSuggestion {
  type: 'match';
  id: string;
  score: number;
  leagueId: number;
  leagueName: string;
  matchDate: string;
  status: {
    utcTime: string;
    finished: boolean;
    started: boolean;
    cancelled: boolean;
    awarded: boolean;
    scoreStr: string;
    reason: {
      short: string;
      shortKey: string;
      long: string;
      longKey: string;
    };
  };
  homeTeamId: string;
  homeTeamName: string;
  homeTeamScore: number;
  awayTeamId: string;
  awayTeamName: string;
  awayTeamScore: number;
}

export interface SearchLeagueSuggestion {
  type: 'league';
  id: string;
  score: number;
  name: string;
  countryCode: string;
}

export type SearchSuggestion = 
  | SearchPlayerSuggestion 
  | SearchTeamSuggestion 
  | SearchMatchSuggestion 
  | SearchLeagueSuggestion;

export interface SearchCategory {
  title: {
    key: string;
    value: string;
  };
  suggestions: SearchSuggestion[];
}

export type SearchResponse = SearchCategory[];
