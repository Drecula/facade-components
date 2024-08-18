import { HTMLAttributes, ComponentType } from 'react'
import { useVersionMapContext } from '../VersionMap/VersionMapContext'
import { ComponentNames } from '../VersionMap/NewComponentsList'

export type EnhancedNewProps<NewProps> = NewProps & { isNew: true }

const withFacade = <
  OldProps extends HTMLAttributes<HTMLElement>,
  NewProps extends HTMLAttributes<HTMLElement>
>(
  componentName: ComponentNames,
  OldComponent: ComponentType<OldProps>,
  NewComponent: ComponentType<NewProps>
) => {
  return (props: OldProps | NewProps) => {
    let isNew = false

    try {
      const { versionMap } = useVersionMapContext()
      isNew = versionMap?.[componentName] ?? false
    } catch {
      // If versionMapContext is not available, default to old component
    }

    return isNew ? <NewComponent {...(props as EnhancedNewProps<NewProps>)} isNew={isNew} /> : <OldComponent {...(props as OldProps)} />
  }
}

export default withFacade
