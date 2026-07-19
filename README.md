# @iamglitch404/fotmob

This is a complete, strongly-typed NPM package that gives you access to real-time football (soccer) data, live scores, match details, transfers, and news from all major leagues.

## 1. TV Listings
**Endpoint:** `fetchTvListings({ countryCode: 'GB' })`
**Sample Data:**
```json
{
  "startTime": "/Date(1784408400000)/",
  "endTime": "/Date(-62135596800000)/",
  "station": {
    "name": "BBC Sport online"
  },
  "program": {
    "teams": [
      { "name": "France", "isHome": true },
      { "name": "England", "isHome": false }
    ]
  }
}
```

## 2. Trending News
**Endpoint:** `fetchTrendingNews({ lang: 'en', ccode3: 'GBR' })`
**Sample Data:**
```json
{
  "imageUrl": "...",
  "title": "‘Whatever Happens’—Messi Sends Emotional Message",
  "sourceStr": "SI"
}
```

## 3. Timeline News
**Endpoint:** `fetchTimelineNews({ id: 87, type: 'league', language: 'en' })`
**Description:** Fetches paginated news timeline for a specific entity (league/team).

## 4. Top Transfers
**Endpoint:** `fetchTopTransfers({ minFeeCurrency: 'EUR', page: 1 })`
**Sample Data:**
```json
{
  "name": "Trincão",
  "fromClub": "Sporting CP",
  "toClub": "Al Ahli",
  "fee": {
    "value": 39350000
  }
}
```

## 5. League Table
**Endpoint:** `fetchLeagueTable({ leagueId: 87 })`
**Description:** Returns the complete standings table for a league.

## 6. Matches (By Date)
**Endpoint:** `fetchMatches({ date: '20260719', ccode3: 'NPL' })`
**Sample Data:**
```json
{
  "id": 894789,
  "name": "World Cup",
  "matches": [
    {
      "home": { "name": "France", "score": 4 },
      "away": { "name": "England", "score": 6 },
      "status": {
        "reason": { "long": "Full-Time" }
      }
    }
  ]
}
```

## 7. League Details
**Endpoint:** `fetchLeagueDetails({ id: 87 })`
**Description:** Retrieves deep details, stats, and ongoing rounds for a league.

## 8. Audio Matches
**Endpoint:** `fetchAudioMatches()`
**Description:** Returns a list of active matches that feature live audio commentary.

## 9. All Leagues
**Endpoint:** `fetchAllLeagues({ locale: 'en', country: 'NPL' })`
**Description:** Returns categorized leagues (Popular, International, Countries).

## 10. All-Time Top Scorers
**Endpoint:** `fetchTopScorers({ leagueId: 77 })`
**Description:** Top historic scorers for a given league/tournament.

## 11. Team of the Week
**Endpoint:** `fetchTeamOfTheWeek({ leagueId: 77, roundId: 'Semi Finals', season: '2026' })`
**Sample Data:**
```json
{
  "name": { "fullName": "Unai Simón" },
  "rating": { "num": "8.2" },
  "isTots": false
}
```

## 12. Team of the Week Rounds
**Endpoint:** `fetchTeamOfTheWeekRounds({ leagueId: 77, season: '2026' })`
**Sample Data:**
```json
{
  "roundId": "Semi Finals",
  "isCompleted": true
}
```

## 13. Live Fixtures
**Endpoint:** `fetchLiveFixtures({ leagueId: 77 })`
**Description:** Real-time polling endpoint for active live matches.

## 14. Player Details
**Endpoint:** `fetchPlayerDetails({ id: 30981 })`
**Sample Data:**
```json
{
  "name": "Lionel Messi",
  "primaryTeam": { "teamName": "Inter Miami CF" },
  "mainLeague": { "leagueName": "Major League Soccer" }
}
```

## 15. Search
**Endpoint:** `fetchSearchData({ term: 'messi', hits: 50 })`
**Sample Data:**
```json
{
  "type": "player",
  "name": "Lionel Messi",
  "teamName": "Inter Miami CF"
}
```

## 16. Team Details
**Endpoint:** `fetchTeamDetails({ id: 8633 })`
**Sample Data:**
```json
{
  "name": "Real Madrid",
  "squad": {
    "position": "coach",
    "members": [{ "name": "José Mourinho" }]
  }
}
```

## 18. Match Details
**Endpoint:** `fetchMatch({ id: 4694664 })`
**Sample Data:**
```json
{
  "id": 4694664,
  "home": { "name": "New York City FC", "score": 1 },
  "away": { "name": "DC United", "score": 2 },
  "status": {
    "reason": { "long": "Full-Time" }
  },
  "stats": {
    "stats": [
      { "title": "Table position", "stats": [8, 9] }
    ]
  }
}
```
