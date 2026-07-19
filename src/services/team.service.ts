import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { TeamOptions, TeamResponse } from '../types/team.types';

export const getTeamDetails = async (options: TeamOptions): Promise<TeamResponse> => {
    const params: Record<string, string> = {
      id: options.id.toString()
    };
    if (options.ccode3) params.ccode3 = options.ccode3;
    if (options.tab) params.tab = options.tab;

    return HttpClient.get<TeamResponse>(Endpoints.TEAM, params);
  }

  export const getTeamLogoUrl = (id: number): string => {
    return `https://images.fotmob.com/image_resources/logo/teamlogo/${id}.png`;
  }
