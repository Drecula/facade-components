import { FC, ComponentProps } from 'react'
import withFacade from '../../HOC/withFacade'
import OldButton, { ButtonProps as OldButtonProps } from '../Legacy/Button.tsx'
import NewButton, { ButtonProps as NewButtonProps } from '../Latest/Base/Button.tsx'

// Button HOC, the button that users will consume. It works for making the right button (see App.tsx)
// It has a bug, since isNew is runtime value, ts has to do props union vs assigning them explicitly
// Props union screws up code complete since it can't tell which props for a button
const Button = withFacade<OldButtonProps, NewButtonProps>(
  'Button',
  OldButton,
  NewButton
)

export default Button
