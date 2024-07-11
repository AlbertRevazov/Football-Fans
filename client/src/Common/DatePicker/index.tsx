import React, { FC } from 'react'
import { useDataPickerHook } from './hooks'
import styles from './DataPicker.module.scss'

export const DataPicker: FC = () => {
	const { dateBlocks, handleDateClick, selectedDate } = useDataPickerHook()

	return (
		<div className={styles.container}>
			<div className={styles.datePicker}>
				{dateBlocks.map(block => (
					<div
						key={block.date}
						data-date={block.date}
						className={`${styles.dateBlock} ${selectedDate === block.date ? styles.selected : styles.block}`}
						onClick={selectedDate === block.date ? () => {} : handleDateClick}
					>
						{block.formattedDate}
					</div>
				))}
			</div>
		</div>
	)
}
