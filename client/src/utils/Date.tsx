export const DateFormate = (props: string) => {
	// Создание объекта Date из строки UTC
	const date = new Date(props)

	// Москва находится на UTC+3, поэтому добавляем 3 часа
	const moscowOffset = 3 * 60 * 60 * 1000 // 3 часа в миллисекундах
	const moscowDateTime = new Date(date.getTime() + moscowOffset)

	// Форматирование даты и времени в читаемый формат

	const formattedDateTime = moscowDateTime.toLocaleString('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'Europe/Moscow',
	})
	return formattedDateTime
}
