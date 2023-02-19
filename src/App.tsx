import { useState, useEffect, useReducer } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState<number>(0)
  // const [num1, setNum1] = useState<string>('')
  const [num2, setNum2] = useState<string>('')
  const [numeroDigitando, setNumerDigitando] = useState<number>(1)
  const [operator, setOperator] = useState<string | null>(null) 

  interface Calculator {
    num1: string
    num2: string
    operator: string
  }

  const calculatorReducer = (state: Calculator, action: any): any => {
    switch (action.type) {
      case 'ADD_NUM_1': {
        const number = action.number
        return {
          num1: state.num1 + number
        };
      }
      case 'ADD_NUM_2': {
        const number = action.number
        return {
          num2: state.num2 + number
        };
      }
      case 'RESET_NUM1': {
        return {
          num1: ''
        };
      }
      default:
        return state
    }
  }

  const [calculatorState, dispatch] = useReducer(calculatorReducer, {
    num1: '',
    num2: '',
    operator: null
  })

  function handleSelectPlusOperator(): any {
    dispatch({ type: 'SELECT_PLUS_OPERATOR' });
  }

  function handleAddNum1(value: string): void {
    dispatch({ 
      type: 'ADD_NUM_1',
      number: value
    });
  }

  function resetNum1(): any {
    dispatch({ type: 'RESET_NUM1' });
  }

  const { num1 } = calculatorState

  // useEffect(() => {
  //   console.log('num2 xxx -> ', num2)
  // },[num2])

  // useEffect(() => {
  //   console.log('operator xxx -> ', operator)
  // },[operator])

  function handleClickNumber(value: string): any {

    if (value === 'plus') {
      setOperator('plus')
      setNumerDigitando(2)
    }

    else if (value === 'minus') {
      setOperator('minus')
      setNumerDigitando(2)
    }

    else if (value === 'clear') {
      setOperator(null)
      // setNum1('')
      dispatch(resetNum1());
      setNum2('')
      setResult(0)
    }

    else if (value === 'equal') {
      setOperator(null)
      setNumerDigitando(1)

      if (operator === 'plus') {
        const total = Number(num1) + Number(num2)
        setResult(total)
      } else if (operator === 'minus') {
        const total = Number(num1) - Number(num2)
        setResult(total)
      }
    } else {
      if (numeroDigitando === 1) {
        // const newNumber = String(num1) + String(value);
        handleAddNum1(value);
        // dispatch(resetNum1());
      } else if (numeroDigitando === 2) {
        const newNumber = String(num2) + String(value);
        setNum2(newNumber);
      }
    }
  }

  return (
    <div className="App">
      <div>
        <h1>React Calculator</h1>
        <pre>{JSON.stringify(num1)}</pre>
      </div>
      <div className="card">
        <table>
        <thead>
          <tr>
            <td colSpan={4} style={{ fontWeight: 'bold', fontSize: 20 }}>
              { result !== 0 && result}
              { result === 0 && num1 !== '' && num1 }
              { result === 0 && operator === 'plus' && ' + ' }  
              { result === 0 && operator === 'minus' && ' - ' }  
              { result === 0 && num2 !== '' && num2 }
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
              <button onClick={() => handleClickNumber('7')}>7</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber('8')}>8</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber('9')}>9</button>
            </td>
            <td>x</td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClickNumber('4')}>4</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber('5')}>5</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber('6')}>6</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber('minus')}>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClickNumber('1')}>1</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber('2')}>2</button>
            </td>
            <td>
              <button onClick={() => handleClickNumber('3')}>3</button>
            </td>
            <td>
              <button onClick={() => handleSelectPlusOperator()}>+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClickNumber('0')}>0</button>
            </td>
            <td>.</td>
            <td>
              <button onClick={() => handleClickNumber('clear')}>AC</button>
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
