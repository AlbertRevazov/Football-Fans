import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { getMatchesListByDate } from '@/redux/Slices/Games'

interface IUseDataPickerHookReturn {
	dateBlocks: {
		date: string
		formattedDate: string
	}[]
	selectedDate: string
	handleDateClick: React.MouseEventHandler<HTMLDivElement>
}

export const useDataPickerHook = (): IUseDataPickerHookReturn => {
	const today = new Date().toISOString().split('T')[0]
	const [selectedDate, setSelectedDate] = useState<string>(today)
	const dispatch = useAppDispatch()
	const daysRange = 3
	const dateBlocks: {
		date: string
		formattedDate: string
	}[] = []

	for (let i = -daysRange; i <= daysRange; i++) {
		const date = new Date()
		date.setDate(date.getDate() + i)
		const formattedDate = date.toLocaleDateString('ru-RU', {
			month: 'long',
			day: 'numeric',
		})
		dateBlocks.push({ date: date.toISOString().split('T')[0], formattedDate })
	}

	const handleDateClick: React.MouseEventHandler<HTMLDivElement> = e => {
		e.preventDefault()
		const currentTarget = e.currentTarget as HTMLElement
		const date = currentTarget.getAttribute('data-date') as string
		setSelectedDate(date)
		dispatch(getMatchesListByDate(date))
	}

	return { dateBlocks, selectedDate, handleDateClick }
}
