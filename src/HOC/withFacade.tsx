import React from 'react'
import { useVersionMapContext } from '../VersionMap/VersionMapContext'
import { ComponentNames } from '../VersionMap/NewComponentsList'

const withFacade = <
  T extends React.HTMLAttributes<HTMLElement>,
  U extends React.HTMLAttributes<HTMLElement>
>(
  componentName: ComponentNames,
  OldComponent: React.ComponentType<T>,
  NewComponent: React.ComponentType<U>
) => {
  return (props: T | U) => {
    let isNew = false

    try {
      const { versionMap } = useVersionMapContext()
      isNew = versionMap?.[componentName] ?? false
    } catch {
      // If versionMapContext is not available, default to old component
    }

    return isNew ? <NewComponent {...(props as U)} /> : <OldComponent {...(props as T)} />
  }
}

export default withFacade
