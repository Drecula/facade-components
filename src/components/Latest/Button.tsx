// import withFacade from '../../HOC/withFacade'
import { FC } from "react"
import OldButton, { ButtonProps as OldButtonProps } from '../Legacy/Button.tsx'
import NewButton, { ButtonProps as NewButtonProps } from '../Latest/Base/Button.tsx'

// Button HOC, the button that users will consume. It works for making the right button (see App.tsx)

// Combine props from both old and new buttons
type PropsForOldButton = OldButtonProps & { isNew?: never } // isNew should never exist on OldButton
type PropsForNewButton = NewButtonProps & { isNew: true }   // isNew is required for NewButton

const Button: FC<PropsForOldButton | PropsForNewButton> = (props) => {
  const { isNew, ...rest } = props
  if (isNew) {
    return <NewButton {...rest as NewButtonProps} />
  }

  // Here, props are guaranteed to be for OldButton without isNew
  return <OldButton {...rest as OldButtonProps} />
}

export default Button

// const Button = withFacade<OldButtonProps, NewButtonProps>(
//   'Button',
//   OldButton,
//   NewButton
// )

// export default Button
