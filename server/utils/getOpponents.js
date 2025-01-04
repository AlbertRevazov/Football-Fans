function getOpponents(matches) {
	// Определяем команду персоны
	const personTeam =
		matches[0].homeTeam.name === matches[1].homeTeam.name ||
		matches[0].homeTeam.name === matches[1].awayTeam.name
			? matches[0].homeTeam.name
			: matches[0].awayTeam.name

	// Собираем уникальные команды соперников
	const opponents = matches.map(match => {
		const isHome = match.homeTeam.name === personTeam
		const name = isHome ? match.awayTeam.shortName : match.homeTeam.shortName
		const matchDate = match.utcDate
		const score = `${match.score.fullTime.home} : ${match.score.fullTime.away}`
		const apiId = isHome ? match.awayTeam.id : match.homeTeam.id

		return {
			id: apiId,
			name,
			date: matchDate,
			score,
		}
	})

	return opponents
}

module.exports = getOpponents
