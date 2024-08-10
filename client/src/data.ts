export const Links = [
  { id: 1, url: '/matches', title: 'Matches', isGuest: true },
  { id: 2, url: '/competitions', title: 'Competitions', isGuest: true },
  { id: 3, url: '/favorites', title: 'Favorites', isGuest: false },
];

export const Features = [
  {
    id: 1,
    title: 'Instant Match Results',
    description: `Stay informed without the need for live analysis.`,
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

export const LeaguesForMain = [
  {
    id: 1,
    crest: 'https://crests.football-data.org/SA.png',
    title: 'Serie A',
  },
  {
    id: 2,
    crest: 'https://crests.football-data.org/PD.png',
    title: 'La Liga',
  },
  { id: 3, crest: 'https://crests.football-data.org/PL.png', title: 'Premier League' },
  { id: 4, crest: 'https://crests.football-data.org/BL1.png', title: 'Bundesliga' },
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
};

export enum PersonPositions {
  'Goalkeeper' = 'Вратарь',
  'Defence' = 'Защитник',
  'Midfield' = 'Полузащитник',
  'Offence' = 'Нападающий',
}
