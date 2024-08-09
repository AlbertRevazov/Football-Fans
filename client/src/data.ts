export const Links = [
  { id: 1, url: '/matches', title: 'Matches', isGuest: true },
  // { id: 2, url: "/teams", title: "Teams" },
  { id: 2, url: '/competitions', title: 'Competitions', isGuest: true },
  { id: 3, url: '/favorites', title: 'Favorites', isGuest: false },
  // { id: 4, url: "/players", title: "Players" },
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
