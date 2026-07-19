import { createStore } from 'zustand/vanilla';
import { TvListingsService } from '../services/tvlistings.service';
import { NewsService } from '../services/news.service';
import { TransfersService } from '../services/transfers.service';
import { TableService } from '../services/table.service';
import { MatchesService } from '../services/matches.service';
import { LeaguesService } from '../services/leagues.service';
import { AudioService } from '../services/audio.service';
import { AllLeaguesService } from '../services/allLeagues.service';
import { TopScorersService } from '../services/topScorers.service';

import type { TvListingOptions, TvListingResponse } from '../types/tvlistings.types';
import type { TrendingNewsOptions, TrendingNewsResponse, TimelineNewsOptions, TimelineNewsResponse } from '../types/news.types';
import type { TopTransfersOptions, TopTransfersResponse } from '../types/transfers.types';
import type { LeagueTableOptions, LeagueTableResponse } from '../types/table.types';
import type { MatchesOptions, MatchesResponse } from '../types/matches.types';
import type { LeagueDetailsOptions, LeagueDetailsResponse } from '../types/leagues.types';
import type { AudioMatchesResponse } from '../types/audio.types';
import type { AllLeaguesOptions, AllLeaguesResponse } from '../types/allLeagues.types';
import type { TopScorersOptions, TopScorersResponse } from '../types/topScorers.types';
import type { TeamOfTheWeekOptions, TeamOfTheWeekResponse, TeamOfTheWeekRoundsOptions, TeamOfTheWeekRoundsResponse } from '../types/totw.types';
import type { LiveFixturesOptions, LiveFixturesResponse } from '../types/liveFixtures.types';
import type { PlayerOptions, PlayerResponse } from '../types/player.types';
import type { SearchOptions, SearchResponse } from '../types/search.types';
import type { TeamOptions, TeamResponse } from '../types/team.types';
import type { MatchDataOptions, MatchDataResponse } from '../types/match.types';

export interface FotmobState {
  tvListings: TvListingResponse | null;
  trendingNews: TrendingNewsResponse | null;
  timelineNews: TimelineNewsResponse | null;
  topTransfers: TopTransfersResponse | null;
  leagueTable: LeagueTableResponse | null;
  matches: MatchesResponse | null;
  leagueDetails: LeagueDetailsResponse | null;
  audioMatches: AudioMatchesResponse | null;
  allLeagues: AllLeaguesResponse | null;
  topScorers: TopScorersResponse | null;
  teamOfTheWeek: TeamOfTheWeekResponse | null;
  teamOfTheWeekRounds: TeamOfTheWeekRoundsResponse | null;
  liveFixtures: LiveFixturesResponse | null;
  playerDetails: PlayerResponse | null;
  searchData: SearchResponse | null;
  teamDetails: TeamResponse | null;
  matchData: MatchDataResponse | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchTvListings: (options: TvListingOptions) => Promise<void>;
  clearTvListings: () => void;

  fetchTrendingNews: (options?: TrendingNewsOptions) => Promise<void>;
  clearTrendingNews: () => void;

  fetchTimelineNews: (options: TimelineNewsOptions) => Promise<void>;
  clearTimelineNews: () => void;

  fetchTopTransfers: (options?: TopTransfersOptions) => Promise<void>;
  clearTopTransfers: () => void;

  fetchLeagueTable: (options: LeagueTableOptions) => Promise<void>;
  clearLeagueTable: () => void;

  fetchMatches: (options: MatchesOptions) => Promise<void>;
  clearMatches: () => void;

  fetchLeagueDetails: (options: LeagueDetailsOptions) => Promise<void>;
  clearLeagueDetails: () => void;

  fetchAudioMatches: () => Promise<void>;
  clearAudioMatches: () => void;

  fetchAllLeagues: (options?: AllLeaguesOptions) => Promise<void>;
  clearAllLeagues: () => void;

  fetchTopScorers: (options: TopScorersOptions) => Promise<void>;
  clearTopScorers: () => void;

  fetchTeamOfTheWeek: (options: TeamOfTheWeekOptions) => Promise<void>;
  clearTeamOfTheWeek: () => void;

  fetchTeamOfTheWeekRounds: (options: TeamOfTheWeekRoundsOptions) => Promise<void>;
  clearTeamOfTheWeekRounds: () => void;

  fetchLiveFixtures: (options?: LiveFixturesOptions) => Promise<void>;
  clearLiveFixtures: () => void;

  fetchPlayerDetails: (options: PlayerOptions) => Promise<void>;
  clearPlayerDetails: () => void;

  fetchSearchData: (options: SearchOptions) => Promise<void>;
  clearSearchData: () => void;

  fetchTeamDetails: (options: TeamOptions) => Promise<void>;
  clearTeamDetails: () => void;

  fetchMatch: (options: MatchDataOptions) => Promise<void>;
  clearMatch: () => void;
}

export const useFotmobStore = createStore<FotmobState>((set) => ({
  tvListings: null,
  trendingNews: null,
  timelineNews: null,
  topTransfers: null,
  leagueTable: null,
  matches: null,
  leagueDetails: null,
  audioMatches: null,
  allLeagues: null,
  topScorers: null,
  teamOfTheWeek: null,
  teamOfTheWeekRounds: null,
  liveFixtures: null,
  playerDetails: null,
  searchData: null,
  teamDetails: null,
  matchData: null,
  isLoading: false,
  error: null,

  fetchTvListings: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = await TvListingsService.getListings(options);
      set({ tvListings: data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearTvListings: () => set({ tvListings: null, error: null }),

  fetchTrendingNews: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = await NewsService.getTrending(options);
      set({ trendingNews: data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearTrendingNews: () => set({ trendingNews: null, error: null }),

  fetchTimelineNews: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = await NewsService.getTimelineNews(options);
      set({ timelineNews: data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearTimelineNews: () => set({ timelineNews: null, error: null }),

  fetchTopTransfers: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = await TransfersService.getTopTransfers(options);
      set({ topTransfers: data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearTopTransfers: () => set({ topTransfers: null, error: null }),

  fetchLeagueTable: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = await TableService.getLeagueTable(options);
      set({ leagueTable: data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearLeagueTable: () => set({ leagueTable: null, error: null }),

  fetchMatches: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = await MatchesService.getMatches(options);
      set({ matches: data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearMatches: () => set({ matches: null, error: null }),

  fetchLeagueDetails: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = await LeaguesService.getLeagueDetails(options);
      set({ leagueDetails: data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearLeagueDetails: () => set({ leagueDetails: null, error: null }),

  fetchAudioMatches: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await AudioService.getAudioMatches();
      set({ audioMatches: data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearAudioMatches: () => set({ audioMatches: null, error: null }),

  fetchAllLeagues: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = await AllLeaguesService.getAllLeagues(options);
      set({ allLeagues: data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearAllLeagues: () => set({ allLeagues: null, error: null }),

  fetchTopScorers: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = await TopScorersService.getTopScorers(options);
      set({ topScorers: data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearTopScorers: () => set({ topScorers: null, error: null }),

  fetchTeamOfTheWeek: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = (await import('../services/totw.service')).TeamOfTheWeekService.getTeamOfTheWeek(options);
      set({ teamOfTheWeek: await data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearTeamOfTheWeek: () => set({ teamOfTheWeek: null, error: null }),

  fetchTeamOfTheWeekRounds: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = (await import('../services/totw.service')).TeamOfTheWeekService.getTeamOfTheWeekRounds(options);
      set({ teamOfTheWeekRounds: await data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearTeamOfTheWeekRounds: () => set({ teamOfTheWeekRounds: null, error: null }),

  fetchLiveFixtures: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = (await import('../services/liveFixtures.service')).LiveFixturesService.getLiveFixtures(options);
      set({ liveFixtures: await data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearLiveFixtures: () => set({ liveFixtures: null, error: null }),

  fetchPlayerDetails: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = (await import('../services/player.service')).PlayerService.getPlayerDetails(options);
      set({ playerDetails: await data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearPlayerDetails: () => set({ playerDetails: null, error: null }),

  fetchSearchData: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = (await import('../services/search.service')).SearchService.getSearchSuggestions(options);
      set({ searchData: await data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearSearchData: () => set({ searchData: null, error: null }),

  fetchTeamDetails: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = (await import('../services/team.service')).TeamService.getTeamDetails(options);
      set({ teamDetails: await data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearTeamDetails: () => set({ teamDetails: null, error: null }),

  fetchMatch: async (options) => {
    set({ isLoading: true, error: null });
    try {
      const data = (await import('../services/match.service')).MatchService.getMatch(options);
      set({ matchData: await data, isLoading: false });
    } catch (err: any) {
      set({ error: err instanceof Error ? err.message : 'Unknown error', isLoading: false });
    }
  },

  clearMatch: () => set({ matchData: null, error: null }),
}));
