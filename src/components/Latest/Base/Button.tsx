import { FC, CSSProperties } from 'react'

export interface ButtonProps {
  label: string
  onClick: () => void
  style?: CSSProperties
}

// new button
const Button: FC<ButtonProps> = ({ label = 'New Button', onClick, style }) => (
  <button onClick={onClick} style={style}>
    {label} (New)
  </button>
)

export default Button
