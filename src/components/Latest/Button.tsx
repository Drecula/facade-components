import { FC, ComponentProps } from 'react'
import withFacade, { EnhancedNewProps } from '../../HOC/withFacade'
import OldButton, { ButtonProps as OldButtonProps } from '../Legacy/Button.tsx'
import NewButton, { ButtonProps as NewButtonProps } from '../Latest/Base/Button.tsx'

// Button HOC, the button that users will consume
const Button: FC<OldButtonProps | EnhancedNewProps<NewButtonProps>> = (props) => {
  const ButtonFacade = withFacade<OldButtonProps, NewButtonProps>(
    'Button',
    OldButton,
    NewButton
  )

  type ButtonFacadeProps = ComponentProps<typeof ButtonFacade>

  return <ButtonFacade {...(props as ButtonFacadeProps)} />
}

export default Button
