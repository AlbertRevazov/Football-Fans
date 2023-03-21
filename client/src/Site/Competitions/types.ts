export type Tournament = {
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  filters: { season: string };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null;
  };
  standings: Standings[];
};
export type TournamentState = {
  tournament: Tournament | null;
  topScorers: TopScorers | null;
  isLoading: boolean;
  errorMessage: string | undefined | null;
};
export type Standings = {
  group: null;
  stage: string;
  table: Table[];
  type: string;
};
export type Table = {
  draw: number;
  form: string;
  goalDifference: number;
  goalsAgainst: number;
  goalsFor: number;
  lost: number;
  playedGames: number;
  points: number;
  position: number;
  team: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  won: number;
};

export type TeamTable = {
  position: number;
  team: {
    crest: string;
    id: number;
    name: string;
  };
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
};
export type TopScorers = {
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  count: number;
  filters: {
    season: string;
    limit: number;
  };
  scorers: Scorers[];
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner?: number;
  };
};
export type Scorers = {
  goals: number;
  assists: number;
  penalties: number;
  team: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
  };
  player: {
    id: number;
    name: string;
    firstName: string;
    lastName: number;
    dateOfBirth: string;
    nationality: string;
    position: string;
  };
};
