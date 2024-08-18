import { FC, CSSProperties } from 'react'

export interface ButtonProps {
  label: string
  onClick: () => void
  style?: CSSProperties
  newProp?: string
}

// NEW button
const Button: FC<ButtonProps> = ({ label = 'New Button', onClick, style, newProp }) => (
  <button onClick={onClick} style={style}>
    {label} {newProp} (New)
  </button>
)

export default Button
