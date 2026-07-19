import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { PlayerOptions, PlayerResponse } from '../types/player.types';

export class PlayerService {
  /**
   * Fetches the massive player profile payload.
   * @param options Configuration for fetching a player's profile.
   * @returns A promise resolving to the player data.
   */
  static async getPlayerDetails(options: PlayerOptions): Promise<PlayerResponse> {
    return HttpClient.get<PlayerResponse>(Endpoints.PLAYER_DATA, {
      id: options.id.toString()
    });
  }

  /**
   * FotMob doesn't return the image URL in the API response. 
   * They use a predictable URL structure based on the player ID.
   * This helper returns the absolute URL to a player's headshot.
   * @param id The player ID
   * @returns The absolute URL to the player's image (.png)
   */
  static getPlayerImageUrl(id: number): string {
    return `https://images.fotmob.com/image_resources/playerimages/${id}.png`;
  }
}
