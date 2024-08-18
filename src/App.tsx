import Button from './components/Latest/Button'
import { VersionMapProvider } from './VersionMap/VersionMapContext.tsx'
import './App.css'

function App() {
  return (
    <>
      <h2>Facade Components</h2>
      <div className="card">
        {/* Old Button (default to old since it's outside of the context) */}
        <Button  label='Greetings from old button' onClick={() => alert('Olde button clicked!')}/>
      </div>
      <div className="card">
        {/* New Button (wrapped in the VersionMapProvider to use the new version) */}
        <VersionMapProvider newComponents={[ 'Button' ]}>
          <Button  label='Hi from new button' onClick={() => alert('New button clicked!')}/>
        </VersionMapProvider>
      </div>
      <div className="card">
        {/* Old Button (VersionMapProvider only includes MyComponent, so Button remains old) */}
        <VersionMapProvider newComponents={[ 'MyComponent' ]}>
          <Button label='Greetings from old button again' onClick={() => alert('Olde button clicked again!')}/>
        </VersionMapProvider>
      </div>
    </>
  )
}

export default App
