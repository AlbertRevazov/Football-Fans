import React from 'react'

interface CompetitionFooterProps {
  code: string
}

const CompetitionFooter: React.FC<CompetitionFooterProps> = ({ code }) => {
  return (
    <>
      {code === 'CL' && (
        <ul>
          <li>Первые 8 мест, автоматически проходят в стадию 1/8 финала.</li>
          <li>Места с 9 по 24, участвуют в раунде 1/16 финала.</li>
        </ul>
      )}
    </>
  )
}

export default CompetitionFooter
