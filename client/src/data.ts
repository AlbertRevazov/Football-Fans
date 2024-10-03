export const Links = [
  { id: 1, url: '/matches', title: 'Matches', isGuest: true },
  { id: 2, url: '/competitions', title: 'Competitions', isGuest: true },
  { id: 3, url: '/favorites', title: 'Favorites', isGuest: false },
];

export const Features = [
  {
    id: 1,
    title: 'Instant Match Results',
    description: `Get immediate access to the latest scores and outcomes from your favorite football matches.`,
    icon: 'img/main/ball.png',
  },
  {
    id: 2,
    title: 'Detailed Player Profiles',
    description: `Dive into comprehensive player profiles, transfer history, and performance data.`,
    icon: 'img/main/person.png',
  },
  {
    id: 3,
    title: 'Group & League Tables',
    description: `Focus on specific teams, divisions, or seasons to track the progress of your favorites.`,
    icon: 'img/main/table.png',
  },
];

export const Leagues = [
  {
    id: 1,
    crest: 'https://crests.football-data.org/SA.png',
    title: 'Serie A',
    apiId: 'SA',
  },
  {
    id: 2,
    crest: 'https://crests.football-data.org/PD.png',
    title: 'La Liga',
    apiId: 'PD',
  },
  { id: 3, crest: 'https://crests.football-data.org/PL.png', title: 'Premier League', apiId: 'PL' },
  { id: 4, crest: 'https://crests.football-data.org/BL1.png', title: 'Bundesliga', apiId: 'BL1' },
];

export const TeamsForMain = [
  {
    id: 1,
    crest: '/img/main/juve.png',
    title: 'Juventus',
    apiId: '109',
  },
  {
    id: 2,
    crest: '/img/main/barca.png',
    title: 'Barça',
    apiId: '81',
  },
  { id: 3, crest: '/img/main/city.png', title: 'Man City', apiId: '65' },
  { id: 4, crest: '/img/main/bayern.png', title: 'Bayern', apiId: '5' },
];

export enum MatchStatuses {
  'POSTPONED' = 'Перенесён',
  'FINISHED' = 'Завершён',
  'TIMED' = 'Не начался',
}

export enum MatchStages {
  'FINAL' = 'ФИНАЛ',
  'THIRD_PLACE' = 'ТРЕТЬЕ МЕСТО',
  'SEMI_FINALS' = 'ПОЛУФИНАЛЫ',
  'QUARTER_FINALS' = 'ЧЕТВЕРТЬФИНАЛЫ',
  'LAST_16' = '1/16',
  'LAST_32' = '1/32',
  'LAST_64' = '1/64',
  'ROUND_4' = 'РАУНД 4',
  'ROUND_3' = 'РАУНД 3',
  'ROUND_2' = 'РАУНД 2',
  'ROUND_1' = 'РАУНД 1',
  'GROUP_STAGE' = 'ГРУППОВОЙ ЭТАП',
  'QUALIFICATION' = 'КВАЛИФИКАЦИЯ',
  'QUALIFICATION_ROUND_1' = 'КВАЛИФИКАЦИЯ РАУНД 1',
  'QUALIFICATION_ROUND_2' = 'КВАЛИФИКАЦИЯ РАУНД 2',
  'QUALIFICATION_ROUND_3' = 'КВАЛИФИКАЦИЯ РАУНД 3',
  'PLAYOFF_ROUND_1' = 'ПЛЕЙ-ОФФ РАУНД 1',
  'PLAYOFF_ROUND_2' = 'ПЛЕЙ-ОФФ РАУНД 2',
  'PLAYOFFS' = 'ПЛЕЙ-ОФФ',
  'REGULAR_SEASON' = 'РЕГУЛЯРНЫЙ СЕЗОН',
  'CHAMPIONSHIP' = 'ЧЕМПИОНАТ',
}

export const ApiErrors: { [key: string]: string } = {
  '400':
    'Ваш запрос был неправильно сформирован, скорее всего, значение фильтра не было установлено в соответствии с ожидаемым типом данных.',
  '403': 'Ограниченный ресурс.Вы попытались получить доступ к ресурсу, который недоступен для вас.',
  '404': 'Вы попытались получить доступ к ресурсу, которого не существует.',

  '429': 'Вы превысили допустимое количество запросов в минуту Пожалуйста, попробуйте позже.',
  '500': 'Это моя вина. Не стесняйтесь обращаться с жалобой по адресу daniel@football-data.org',
};

export enum PersonPositions {
  'Goalkeeper' = 'Вратарь',
  'Defence' = 'Защитник',
  'Midfield' = 'Полузащитник',
  'Offence' = 'Нападающий',
}
