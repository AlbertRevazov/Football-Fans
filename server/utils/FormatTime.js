function getMoscowDateString(date) {
	const moscowDate = new Date(date)
	moscowDate.setMinutes(
		moscowDate.getMinutes() + moscowDate.getTimezoneOffset() + 180
	)
	return moscowDate.toISOString().split('T')[0]
}
module.exports = { getMoscowDateString }
