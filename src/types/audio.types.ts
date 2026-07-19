export interface AudioMatchItem {
  /**
   * The match ID.
   */
  id: string;
  
  /**
   * An array of language codes supported for this match's audio.
   * @example ["ENG", "ESP", "FRA"]
   */
  langs: string[];
}

export type AudioMatchesResponse = AudioMatchItem[];
