import { FC } from 'react'

export interface ButtonProps {
  label: string
  onClick: () => void
  oldProp?: string
}

// OLD button
const Button: FC<ButtonProps> = ({ label = 'Ye Olde Button', onClick, oldProp }) => (
  <button onClick={onClick}>{label} {oldProp} (Old)</button>
)

export default Button
