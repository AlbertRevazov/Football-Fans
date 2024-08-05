export type CompetitionsState = {
  competitionsList: Competitions[] | null;
  data: CompetitionData | null;
  isLoading: boolean;
  errorCode: number;
};

export type CompetitionData = {
  competition: Competitions;
  scorers: Scorers[];
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null;
  };
  table: Table[];
  group?: Standings[];
};

export type Competitions = {
  id: number;
  name: string;
  code: string;
  emblem: string;
  startDate: string;
  endDate: string;
  type: string;
  currentSeason: {
    currentMatchday: number;
    winner: null;
  };
};

export type Table = {
  team: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  position: number;
  playedGames: number;
  form: null;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
};

export type Standings = {
  group: string;
  stage: string;
  table: Table[];
  type: string;
};

export type Scorers = {
  assists: number;
  goals: number;
  penalties: number;
  playedMatches: number;
  player: {
    id: number;
    name: string;
    nationality: string;
    position: null;
    section: string;
    shirtNumber: null;
  };
  team: {
    crest: string;
    id: number;
    name: string;
    shortName: string;
  };
};
