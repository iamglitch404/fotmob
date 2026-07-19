import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { TeamOptions, TeamResponse } from '../types/team.types';

export class TeamService {
  /**
   * Fetches team details including squad, overview, and history.
   * @param options Configuration for fetching team details.
   * @returns A promise resolving to the team data.
   */
  static async getTeamDetails(options: TeamOptions): Promise<TeamResponse> {
    const params: Record<string, string> = {
      id: options.id.toString()
    };
    if (options.ccode3) params.ccode3 = options.ccode3;
    if (options.tab) params.tab = options.tab;

    return HttpClient.get<TeamResponse>(Endpoints.TEAM, params);
  }

  /**
   * Helper to get the absolute URL for a team's badge/logo.
   * @param id The team ID
   * @returns Absolute URL to the team's logo (.png)
   */
  static getTeamLogoUrl(id: number): string {
    return `https://images.fotmob.com/image_resources/logo/teamlogo/${id}.png`;
  }
}
