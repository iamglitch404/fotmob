export interface AllLeaguesOptions {
  /**
   * Locale for localized names.
   * @example 'en'
   */
  locale?: string;
  /**
   * Country code for localized preferences.
   * @example 'NPL', 'GBR'
   */
  country?: string;
}

export interface BaseLeague {
  id: number;
  name: string;
  localizedName: string;
  pageUrl: string;
  ccode: string;
}

export interface CountryLeagueGroup {
  ccode: string;
  name: string;
  localizedName: string;
  leagues: BaseLeague[];
}

export interface AllLeaguesResponse {
  popular: BaseLeague[];
  international: CountryLeagueGroup[];
  countries: CountryLeagueGroup[];
}
