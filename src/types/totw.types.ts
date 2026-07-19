export interface TeamOfTheWeekOptions {
  /**
   * League ID.
   * @example 77
   */
  leagueId: number;
  /**
   * Round ID or stage.
   * @example 'Semi Finals'
   */
  roundId: string;
  /**
   * Season identifier.
   * @example '2026'
   */
  season: string;
}

export interface TotwPlayerName {
  firstName: string;
  lastName: string;
  fullName: string;
}

export interface TotwRating {
  num: string;
  bgcolor: string;
  isTop: {
    isTopRating: boolean;
  };
}

export interface TotwVerticalLayout {
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface TotwPlayer {
  id: number;
  name: TotwPlayerName;
  rating: TotwRating;
  matchId: number;
  teamId: number;
  verticalLayout: TotwVerticalLayout;
  isTots: boolean;
}

export type TeamOfTheWeekResponse = TotwPlayer[];

export interface TeamOfTheWeekRoundsOptions {
  /**
   * League ID.
   * @example 77
   */
  leagueId: number;
  /**
   * Season identifier.
   * @example '2026'
   */
  season: string;
}

export interface TotwRound {
  localizedKey?: string;
  roundId: string;
  isCompleted: boolean;
}

export interface TeamOfTheWeekRoundsResponse {
  last: TotwRound;
  rounds: TotwRound[];
}
