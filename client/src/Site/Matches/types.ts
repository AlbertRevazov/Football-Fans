export type CompetitionsToday = Record<string, string>;

export type GamesState = {
  games: Matches[] | null;
  isLoading: boolean;
  errorMessage: string | undefined | null;
};

export type UseMatchesHookReturnType = {
  competionsTodayNames: CompetitionsToday;
  competitionsNames: string[];
  isLoading: boolean;
  errorMessage: string | null | undefined;
};
export type Matches = {
  awayTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  area: {
    ensignUrl: string;
    name: string;
  };
  competition: {
    code: string;
    id: number;
    name: string;
    group?: string;
    emblem: string;
  };
  homeTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  id: number;
  matchday: string;
  odds: {
    msg: string;
  };
  referees: [
    {
      id: number;
      name: string;
      nationality: string;
      role: string;
    }
  ];
  score: {
    duration: string;
    extraTime?: { homeTeam: null; awayTeam: null };
    fullTime?: { homeTeam: null; awayTeam: null };
    halfTime?: { homeTeam: null; awayTeam: null };
    penalties?: { homeTeam: null; awayTeam: null };
    winner?: null;
  };
  season: {
    currentMatchday: number;
    endDate: string;
    id: number;
    startDate: string;
    winner: null;
    stage: string;
    status: string;
    utcDate: string;
  };
};
