import { FC } from 'react'

export interface ButtonProps {
  label: string
  onClick: () => void
}

// OLD button
const Button: FC<ButtonProps> = ({ label = 'Ye Olde Button', onClick }) => (
  <button onClick={onClick}>{label} (Old)</button>
)

export default Button
