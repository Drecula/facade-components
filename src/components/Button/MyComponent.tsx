import { FC } from 'react'

export interface MyComponentProps {
  label: string
  onClick: () => void
}

const MyComponent: FC<MyComponentProps> = ({ label = 'Old Version of MyComponent', onClick }) => (
  <div onClick={onClick}>{label}</div>
)

export default MyComponent
