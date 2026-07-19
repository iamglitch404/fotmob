import { HttpClient } from '../utils/httpClient';
import { Endpoints } from '../constants/endpoints';
import type { LeagueTableOptions, LeagueTableResponse } from '../types/table.types';

export const getLeagueTable = async (options: LeagueTableOptions): Promise<LeagueTableResponse> => {
    const params: Record<string, string> = {
      url: `http://data.fotmob.com/tables.ext.${options.leagueId}.fot.gz`,
      teams: '[null,null]',
      parentLeagueId: options.leagueId.toString(),
      parentLeagueName: '',
      selectedSeason: '',
      isCurrentSeason: 'true'
    };

    return HttpClient.get<LeagueTableResponse>(Endpoints.LEAGUE_TABLE, params);
  }
