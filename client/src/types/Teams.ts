import { IArea } from './Games';

export type TeamsState = {
  team: ITeam | null;
  isLoading: boolean;
  status: number;
};

export interface ITeam {
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
  area: IArea;
  runningCompetitions: IRunningCompetitions[];
  coach: ICoach;
  squad: IGroupSquad;
  errorCode?: string;
}

export interface IRunningCompetitions {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

export interface ICoach {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  dateOfBirth: string;
  nationality: string;
  contract: {
    start: string;
    until: string;
  };
}
export interface ISquad {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  nationality: string;
}

export interface IGroupSquad {
  [key: string]: ISquad[];
}
