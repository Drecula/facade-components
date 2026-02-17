// src/VersionMap/VersionMap.ts
import { useMemo } from 'react'

export type ComponentName = 'Button' | 'MyComponent' // Extend with more components as needed

const defaultNewComponents: ComponentName[] = ['Button', 'MyComponent'] // List all components that are new by default

// const versionMap: Record<ComponentName, boolean> = {} as Record<ComponentName, boolean>

// export const SetVersionMap = (components: ComponentName | ComponentName[] | 'none') => {
//   versionMap = useMemo(() => {
//     if (components === 'none') {
//       return {} as Record<ComponentName, boolean> // All components default to old
//     } else {
//       const componentArray = Array.isArray(components) ? components : [components]
//       return componentArray.reduce((map, component) => {
//         map[component] = true
//         return map
//       }, {} as Record<ComponentName, boolean>)
//     }
//   }, [components])
// }

export const isNewVersion = (componentName: ComponentName): boolean => {
  // Default to new versions if versionMap isn't set
  return defaultNewComponents.includes(componentName)
}
