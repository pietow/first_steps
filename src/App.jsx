import { Alert } from './Alert'



function App() {

  return (<Alert heading="Success" closable onClose={()=> console.log("closed defined in App")}>Everthing is really good!</Alert>)
}

export default App
