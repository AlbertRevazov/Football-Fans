const sortedSquad = players => {
	const groupedPlayers = {
		Goalkeepers: [],
		Defenders: [],
		Midfielders: [],
		Forwards: [],
	}

	players.forEach(player => {
		switch (player.position) {
			case 'Goalkeeper':
				groupedPlayers.Goalkeepers.push(player)
				break
			case 'Centre-Back':
			case 'Left-Back':
			case 'Right-Back':
			case 'Defence':
				groupedPlayers.Defenders.push(player)
				break
			case 'Central Midfield':
			case 'Left Midfield':
			case 'Right Midfield':
			case 'Midfield':
				groupedPlayers.Midfielders.push(player)
				break
			case 'Centre-Forward':
			case 'Left Winger':
			case 'Right Winger':
			case 'Offence':
				groupedPlayers.Forwards.push(player)
				break
		}
	})
	return groupedPlayers
}

module.exports = sortedSquad
