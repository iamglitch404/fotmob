export const BASE_URL = 'https://www.fotmob.com';

export const Endpoints = {
  TV_LISTINGS: '/api/data/tvlistings',
  TRENDING_NEWS: '/api/trendingnews',
  TIMELINE_NEWS: '/api/data/tlnews',
  TOP_TRANSFERS: '/api/data/top-transfers',
  LEAGUE_TABLE: '/api/data/table',
  MATCHES: '/api/data/matches',
  LEAGUE_DETAILS: '/api/data/leagues',
  AUDIO_MATCHES: '/api/data/audio-matches',
  ALL_LEAGUES: '/api/data/allLeagues',
  TOP_SCORERS: '/api/data/allTimeTopScorers',
  TEAM_OF_THE_WEEK: '/api/data/team-of-the-week/team',
  TEAM_OF_THE_WEEK_ROUNDS: '/api/data/team-of-the-week/rounds',
  LIVE_FIXTURES: '/api/data/liveFixtures',
  PLAYER_DATA: '/api/data/playerData',
  SEARCH: '/api/data/search/suggest',
  TEAM: '/api/data/teams',
  MATCH: '/api/data/match',
} as const;
