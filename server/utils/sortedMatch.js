function filterMatchesByDate(matches, date) {
	const targetDate = new Date(date).toISOString().split('T')[0]

	return matches.filter(match => {
		const matchDate = new Date(match.utcDate)
		const matchDateString = matchDate.toISOString().split('T')[0]
		const matchHour = matchDate.getUTCHours()

		if (matchHour < 2 && matchDateString === targetDate) {
			return true
		}

		return matchDateString === targetDate
	})
}

function groupMatchesByCompetition(matches) {
	const groupedMatches = {}

	matches.forEach(match => {
		const competitionName = match.competition.name

		if (!groupedMatches[competitionName]) {
			groupedMatches[competitionName] = []
		}

		groupedMatches[competitionName].push(match)
	})

	return groupedMatches
}
module.exports = {
	filterMatchesByDate,
	groupMatchesByCompetition,
}
