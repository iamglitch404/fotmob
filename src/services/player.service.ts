import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { PlayerOptions, PlayerResponse } from '../types/player.types';

export const getPlayerDetails = async (options: PlayerOptions): Promise<PlayerResponse> => {
    return HttpClient.get<PlayerResponse>(Endpoints.PLAYER_DATA, {
      id: options.id.toString()
    });
  }

  export const getPlayerImageUrl = (id: number): string => {
    return `https://images.fotmob.com/image_resources/playerimages/${id}.png`;
  }
