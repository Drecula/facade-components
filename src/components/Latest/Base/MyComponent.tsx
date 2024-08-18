import { FC } from 'react'

export interface MyComponentProps {
  label: string
  onClick: () => void
  randomProp: string
}

const MyComponent: FC<MyComponentProps> = ({ label = 'All Shiny & Chrome New Version of MyComponent', onClick }) => (
  <div onClick={onClick}>{label}</div>
)

export default MyComponent
