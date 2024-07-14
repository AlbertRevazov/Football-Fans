export type GamesState = {
  games: IGames[] | null;
  isLoading: boolean;
  status: string;
  head2head: {
    match: IGames;
    head: IHead2Head;
  } | null;
};
export interface IGames {
  id: number;
  lastUpdated: string;
  matchday: number;
  stage: string;
  status: string;
  utcDate: string;
  area: IArea;
  homeTeam: IHomeTeam;
  awayTeam: IAwayTeam;
  competition: ICompetition;
  score: IScore;
  season: ISeason;
  venue?: string;
  referees: {
    id: number;
    name: string;
    type: string;
    nationality: string;
  }[];
}
export interface IArea {
  code: string;
  flag: string;
  id: number;
  name: string;
}

export interface IHomeTeam {
  crest: string;
  id: number;
  name: string;
  shortName: string;
  tla: string;
}
export interface IAwayTeam {
  crest: string;
  id: number;
  name: string;
  shortName: string;
  tla: string;
}
export interface ICompetition {
  code: string;
  emblem: string;
  id: number;
  name: string;
  type: string;
}
export interface IScore {
  duration: string;
  fullTime: {
    home: number;
    away: number;
  };
  winner: string;
}
export interface ISeason {
  currentMatchday: number;
  endDate: string;
  id: number;
  startDate: string;
}

export type IHead2Head = {
  awayTeam: {
    draws: number;
    id: number;
    losses: number;
    name: string;
    wins: number;
  };
  homeTeam: { draws: number; id: number; losses: number; name: string; wins: number };

  numberOfMatches: number;
  totalGoals: number;
};
