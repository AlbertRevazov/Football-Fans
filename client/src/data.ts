export const Links = [
  { id: 1, url: '/matches', title: 'Matches' },
  // { id: 2, url: "/teams", title: "Teams" },
  { id: 3, url: '/competitions', title: 'Competitions' },
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
