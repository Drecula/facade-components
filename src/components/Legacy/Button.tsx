import { FC } from 'react'

export interface ButtonProps {
  label: string
  onClick: () => void
}

// old button
const Button: FC<ButtonProps> = ({ label = 'Ye Olde Button', onClick }) => (
  <button onClick={onClick}>{label} (Old)</button>
)

export default Button
