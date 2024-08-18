import withFacade from '../../HOC/withFacade'
import OldButton, { ButtonProps as OldButtonProps } from '../Legacy/Button.tsx'
import NewButton, { ButtonProps as NewButtonProps } from '../Latest/Base/Button.tsx'

// Button HOC, the button that users will consume
const Button = withFacade<OldButtonProps, NewButtonProps>(
  'Button',
  OldButton,
  NewButton
)

export default Button
