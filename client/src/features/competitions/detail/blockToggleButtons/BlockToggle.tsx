import React from 'react'
import styles from './block-toggle-buttons.module.scss'

type BlockType = 'table' | 'scorers' | 'calendar'

interface BlockToggleProps {
  activeBlock: BlockType
  onBlockChange: (type: BlockType) => void
}

const BLOCK_TYPES: BlockType[] = ['table', 'scorers', 'calendar']

const BlockToggle: React.FC<BlockToggleProps> = ({ activeBlock, onBlockChange }) => {
  return (
    <div className={styles.buttonsGroup}>
      {BLOCK_TYPES.map(type => {
        const buttonClassName = activeBlock === type ? styles.disabled : styles.toggleBtn
        return (
          <div
            key={type}
            className={buttonClassName}
            onClick={() => activeBlock !== type && onBlockChange(type)}>
            {type}
          </div>
        )
      })}
    </div>
  )
}

export default BlockToggle
