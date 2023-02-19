import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState<number>(0)
  const [numeroDigitado, setNumeroDigitado] = useState<any>([])
  const [indexArrayNumber, setIndexArrayNumber] = useState<number>(0)
  const [operator, setOperator] = useState<string>('') 

  useEffect(() => {
    console.log('numeroDigitado xxx -> ', numeroDigitado)
  },[numeroDigitado])

  useEffect(() => {
    console.log('operator xxx -> ', operator)
  },[operator])

  function handleClickNumber(value: number | string): any {
    if (typeof value === 'number') {
        // setNumeroDigitado([...numeroDigitado, value])

      const teste = [
        ...numeroDigitado,
        ...numeroDigitado[indexArrayNumber] = [...numeroDigitado[indexArrayNumber], value]
      ]

      setNumeroDigitado(teste)

 
    } else if (value === 'plus') {
      setOperator('plus')
      setIndexArrayNumber(state => state + 1)
    }

  }

  return (
    <div className="App">
      <div>
       <h1>React Calculator</h1>
      </div>
      <div className="card">
        <table>
        <thead>
          <tr>
            <td colSpan={4} style={{ fontWeight: 'bold', fontSize: 20 }}>
              {result}
            </td>
          </tr>
          <tr>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button onClick={() => handleClickNumber(7)}>7</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber(8)}>8</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber(9)}>9</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber(10)}>10</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClickNumber(4)}>4</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber(5)}>5</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber(6)}>6</button>
            </td>
            <td>x</td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClickNumber(1)}>1</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber(2)}>2</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber(3)}>3</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber('plus')}>+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClickNumber(0)}>0</button>
            </td>
            <td>.</td>
            <td>
              <button onClick={() => handleClickNumber('clear')}>clear</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber('equal')}>=</button>
            </td>
          </tr>

        </tbody>
      </table>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
