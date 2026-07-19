export interface TvListingOptions {
  /** 
   * Country code for the TV listings. 
   * @example 'NP' 
   */
  countryCode: string;
  
  /** 
   * Optional array of specific match IDs or channel IDs. 
   */
  ids?: string[];
}

export interface TvListingStation {
  callSign: string;
  stationId: string;
  affiliateId: string | null;
  affiliateCallSign: string | null;
  name: string;
  type: string;
  blockedCountryCodes: string[] | null;
}

export interface TvListingTeam {
  name: string;
  isHome: boolean;
  teamBrandId: string;
}

export interface TvListingProgram {
  rootId: string;
  teams: TvListingTeam[];
}

export interface TvListingItem {
  startTime: string;
  endTime: string;
  qualifiers: string[];
  station: TvListingStation;
  stationId: string;
  matchId: number;
  leagueId: number;
  parentLeagueId: number;
  program: TvListingProgram;
  bet365MatchId: number;
  externalId: string | null;
  affiliates: Array<{
    affiliateId: number;
    affiliateName: string;
    affiliateUrl: string;
  }>;
  tags: string[];
}

export interface TvListingResponse {
  [matchId: string]: TvListingItem[];
}
