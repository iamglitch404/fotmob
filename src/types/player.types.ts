export interface PlayerOptions {
  /**
   * The ID of the player to fetch.
   * @example 30981 // Lionel Messi
   */
  id: number;
}

export interface PlayerName {
  firstName: string;
  lastName: string;
  fullName: string;
}

export interface PlayerTeam {
  teamId: number;
  teamName: string;
}

export interface PlayerCareerItem {
  teamId: number;
  teamName: string;
  appearances: string | number;
  goals: string | number;
  season?: string;
  startDate?: string;
  endDate?: string;
}

export interface PlayerInformation {
  value: {
    fallback: string;
    [key: string]: any;
  };
  translationKey: string;
}

export interface PlayerTrophy {
  ccode: string;
  leagueId: number;
  leagueName: string;
  seasonsWon: string[];
  seasonsRunnerUp: string[];
}

export interface PlayerRecentMatch {
  teamId: number;
  teamName: string;
  opponentTeamId: number;
  opponentTeamName: string;
  isHomeTeam: boolean;
  id: number;
  matchDate: {
    utcTime: string;
  };
  matchPageUrl: string;
  leagueId: number;
  leagueName: string;
  stage?: string;
  homeScore: number;
  awayScore: number;
  minutesPlayed: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  ratingProps: {
    num: string | number;
    bgcolor: string;
  };
  playerOfTheMatch: boolean;
  onBench: boolean;
  playedInMatch: boolean;
  lineupPositionId?: number;
}

export interface PlayerNextMatch {
  matchId: number;
  homeId: number;
  awayId: number;
  homeName: string;
  awayName: string;
  matchDate: {
    utcTime: string;
  };
  statusId: number;
  leagueId: number;
  parentLeagueId: number;
  leagueName: string;
  status: string;
  stadium?: string;
  matchUrl: string;
}

export interface PlayerStatCategory {
  title: string;
  items: Array<{
    title: string;
    statValue: string | number;
    per90?: number;
    percentileRank?: number;
    percentileRankPer90?: number;
    statFormat?: string;
  }>;
}

export interface PlayerStatTournament {
  name: string;
  tournamentId: number;
  categories: PlayerStatCategory[];
}

export interface PlayerStatSeason {
  seasonName: string;
  tournaments: PlayerStatTournament[];
}

export interface PlayerTraits {
  key: string;
  title: string;
  items: Array<{
    title: string;
    value: number;
  }>;
}

export interface PlayerResponse {
  id: number;
  name: string;
  birthDate?: {
    utcTime: string;
    timezone: string;
  };
  contractEnd?: string;
  isCoach: boolean;
  isCaptain: boolean;
  gender: string;
  primaryTeam?: {
    teamId: number;
    teamName: string;
    teamColors?: {
      color: string;
      colorAlternate: string;
    };
  };
  positionDescription?: {
    positions: Array<{
      strPos: {
        fallback: string;
      };
    }>;
    primaryPosition: {
      label: string;
      key: string;
    };
  };
  injuryInformation?: {
    status?: string;
    description?: string;
    returnDate?: string;
  };
  internationalDuty?: {
    isCalledUp: boolean;
    teamId?: number;
    teamName?: string;
  };
  playerInformation?: PlayerInformation[];
  mainLeague?: {
    leagueId: number;
    leagueName: string;
  };
  trophies?: {
    playerTrophies: PlayerTrophy[];
  };
  recentMatches?: PlayerRecentMatch[];
  careerHistory?: {
    showFootnote: boolean;
    careerItems: {
      senior: {
        teamEntries: PlayerCareerItem[];
      };
      national: {
        teamEntries: PlayerCareerItem[];
      };
    };
  };
  traits?: PlayerTraits;
  meta?: {
    seopath: string;
    pageurl: string;
  };
  coachStats?: {
    matches: number;
    wins: number;
    draws: number;
    losses: number;
    winPercentage: number;
  };
  statSeasons?: PlayerStatSeason[];
  firstSeasonStats?: string;
  status?: string;
  marketValues?: Array<{
    date: string;
    value: number;
  }>;
  relatedLinksData?: {
    teammates?: Array<{ id: number; name: string }>;
    mensNationalTeam?: Array<{ id: number; name: string }>;
    womensNationalTeam?: Array<{ id: number; name: string }>;
  };
  nextMatch?: PlayerNextMatch;
  dataProvider?: string;
}
