import React from 'react'
import { isNewVersion, ComponentName } from '../VersionMap'


export const useVersionMap = <T, U>(
  componentName: ComponentName,
  OldComponent: React.ComponentType<T>,
  NewComponent: React.ComponentType<U>
) => {
  const isNew = isNewVersion(componentName)
  const Component = isNew ? NewComponent : OldComponent

  // Type guard for props
  const mapProps = (props: T | U) => isNew ? (props as U) : (props as T)

  return { Component, mapProps }
}
