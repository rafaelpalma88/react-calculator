
import './App.css'
import { Calculator } from './components/Calculator'

function App() {
  return (
    <div className="App">
      <div>
        <h1>React Calculator</h1>
        {/* <pre>{JSON.stringify(num1)}</pre> */}
        <Calculator />
      </div>
    </div>
  )
}

export default App
