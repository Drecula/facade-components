// src/Button.tsx
import React from 'react'
import { isNewVersion } from '../../VersionMap/VersionMap'

interface ButtonPropsBase {
  label: string
  onClick: () => void
}

interface NewButtonProps extends ButtonPropsBase {
  style?: React.CSSProperties
}

type ButtonProps =
  | ({ isNew: true } & NewButtonProps)
  | ({ isNew?: false } & ButtonPropsBase)

const Button: React.FC<ButtonProps> = (props) => {
  const { isNew = false, label, onClick } = props

  if (isNewVersion('Button')) {
    // Adjust API for the new version
    const { style } = props as NewButtonProps
    return (
      <button onClick={onClick} style={style}>
        {label} (New)
      </button>
    )
  } else {
    // Legacy support for the old version
    return (
      <button onClick={onClick}>
        {label} (Old)
      </button>
    )
  }
}

export default Button
