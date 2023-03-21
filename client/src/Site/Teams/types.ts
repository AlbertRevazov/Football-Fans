export type Club = {
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  area: { id: number; name: string; code: string; flag: string };
  squad: SquadType[];
  coach: Coach;
  runningCompetitions: RunningCompetitions[];
};
export type TeamState = {
  club: Club | null;
  calendar: Calendar | null;
  name: string | null;
  errorMessage: string | undefined | null;
  isLoading: boolean;
};
export type Team = {
  address: string;
  clubColors: string;
  crest: string;
  founded: number;
  id?: number;
  name: string;
  tla: string;
  venue: string;
  website: string;
  shortName: string;
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  coach?: {
    contract: { start?: string; until?: string };
    dateOfBirth?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
    name?: string;
    nationality?: string;
  };
  runningCompetitions: [
    {
      code: string;
      emblem: string;
      id: number;
      name: string;
      type: string;
    }
  ];
  squad: [
    {
      dateOfBirth: string;
      id: number;
      name: string;
      nationality: string;
      position: string;
    }
  ];
  staff?: [];
};
export type Calendar = {
  filters: {
    competitions: string;
    permission: string;
    limit: number;
  };
  matches: calendarMatches[];
  resultSet: {
    competitions: string;
    count: number;
    draws: number;
    first: string;
    last: string;
    losses: number;
    played: number;
    wins: number;
  };
};
export type calendarMatches = {
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  awayTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  group?: string;
  homeTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  id: number;
  matchday: number;
  odds: {
    msg: string;
  };
  referees: [
    {
      id: number;
      name: string;
      nationality: string;
      type: string;
    }
  ];
  score: {
    winner: string;
    duration: string;
    fullTime: {
      away: number;
      home: number;
    };
    halfTime: {
      away: number;
      home: number;
    };
  };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner?: string;
  };
  stage: string;
  status: string;
  utcDate: string;
};
export type SquadType = {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  nationality: string;
};
export type Coach = {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
};
export type RunningCompetitions = {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
};
