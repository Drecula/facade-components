import React, { createContext, useContext, ReactNode, useState } from 'react'
import { newComponentsMap, ComponentNames } from './NewComponentsList'

type VersionMapContextType = {
  versionMap: Record<ComponentNames, boolean>
}

const VersionMapContext = createContext<VersionMapContextType | undefined>(undefined)

export const VersionMapProvider: React.FC<{ children: ReactNode; newComponents?: ComponentNames[] }> = ({ children, newComponents }) => {
  const [versionMap] = useState<Record<ComponentNames, boolean>>(() => {
    if (!newComponents) {
      return { ...newComponentsMap }
    }

    return Object.keys(newComponentsMap).reduce<Record<ComponentNames, boolean>>((acc, key) => {
      const componentName = key as ComponentNames
      acc[componentName] = newComponents.includes(componentName)
      return acc
    }, {} as Record<ComponentNames, boolean>)
  })

  return (
    <VersionMapContext.Provider value={{ versionMap }}>
      {children}
    </VersionMapContext.Provider>
  )
}

export const useVersionMapContext = (): VersionMapContextType => {
  const context = useContext(VersionMapContext)
  if (!context) {
    throw new Error('useVersionMapContext must be used within a VersionMapProvider')
  }
  return context
}
