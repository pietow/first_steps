import { Alert } from "./Alert";

function App() {
  return (
    <Alert
      heading="Success"
      closable
      onClose={() => console.log("closed defined in App")}
    >
      Everything is really good!
    </Alert>
  )
}

export default App
