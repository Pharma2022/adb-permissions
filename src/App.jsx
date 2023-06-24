import {  GlobalContextProvider } from './hooks/useGlobalContext'
import ADBPermissions from './pages/ADBPermissions'

function App() { 
  return (
    <GlobalContextProvider>
        <ADBPermissions/>
    </GlobalContextProvider>
  )
}

export default App
