export type ComponentNames = 'Button' | 'MyComponent' // Extend with more components as needed

// Object to hold the component names and their new/old status
export const newComponentsMap: Record<ComponentNames, boolean> = {
  Button: true,
  MyComponent: true,
  // Add more components here as needed
}
