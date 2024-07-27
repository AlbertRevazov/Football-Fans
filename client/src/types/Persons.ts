import { IRunningCompetitions } from './Teams';

export type PersonState = {
  person: IPerson | null;
  isLoading: boolean;
  status: string;
  errorCode: string;
};

export type IPerson = {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  section: string;
  position: string;
  shirtNumber: number;
  lastUpdated: string;
  currentTeam: {
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
    area: {
      id: number;
      name: string;
      code: string;
      flag: string;
    };
    runningCompetitions: IRunningCompetitions[];
    contract: {
      start: string;
      until: string;
    };
  };
};
