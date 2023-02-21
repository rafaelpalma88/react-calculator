import { useEffect, useReducer } from 'react'
import './App.css'

function App() {
  interface Calculator {
    num1: string
    num2: string
    operator: string | null
    numeroDigitando: number
  }

  const calculatorReducer = (state: Calculator, action: any): any => {
    switch (action.type) {
      case 'ADD_NUM': {
        const number = action.number

        if (state.numeroDigitando === 1) {
          return { ...state, num1 : state.num1 + number } 
        } 
        if (state.numeroDigitando === 2) {
          return { ...state, num2 : state.num2 + number } 
        } 
      }

      case 'ADD_FLOAT_POINT': {
        if (state.numeroDigitando === 1) {
          return { 
            ...state, 
            num1 : !state.num1.includes('.') && state.num1 + '.' 
          } 
        } 
        if (state.numeroDigitando === 2) {
          return { 
            ...state, 
            num2 : !state.num2.includes('.') && state.num2 + '.' 
          } 
        } 
      }
      case 'SELECT_PLUS_OPERATOR': {
        return { 
          ...state, 
          operator: 'plus', 
          numeroDigitando: 2 
        } 
      }
      case 'SELECT_MINUS_OPERATOR': {
        return { 
          ...state, 
          operator: 'minus', 
          numeroDigitando: 2 
        } 
      }
      case 'SELECT_MULTIPLICATION_OPERATOR': {
        return { 
          ...state, 
          operator: 'multiplication', 
          numeroDigitando: 2 
        } 
      }
      case 'SELECT_DIVISION_OPERATOR': {
        return { 
          ...state, 
          operator: 'division', 
          numeroDigitando: 2 
        } 
      }
      case 'SHOW_RESULT': {
        switch (state.operator) {
          case 'plus': 
            return {
              ...state,
              // result: Number(state.num1) + Number(state.num2)
              num1: Number(state.num1) + Number(state.num2),
              num2: '',
              operator: null,
            };
          case 'minus': 
            return {
              ...state,
              num1: Number(state.num1) - Number(state.num2),
              num2: '',
              operator: null,
            };
          case 'multiplication': 
            return {
              ...state,
              num1: Number(state.num1) * Number(state.num2),
              num2: '',
              operator: null,
            };
          case 'division': 
            return {
              ...state,
              num1: Number(state.num1) / Number(state.num2),
              num2: '',
              operator: null,
            };
          default:
            return {
              ...state,
            };
        }
      }
      case 'RESET_CALCULATOR': {
        return {
          ...state,
          num1: '',
          num2: '',
          numeroDigitando: 1,
          operator: null,
        };
      }
      
      default:
        return state
    }
  }

  const initialValues = {
    num1: '',
    num2: '',
    operator: null,
    numeroDigitando: 1,
  }

  const [calculatorState, dispatch] = useReducer(calculatorReducer, initialValues)

  function handleSelectPlusOperator(): void {
    dispatch({ type: 'SELECT_PLUS_OPERATOR' });
  }

  function handleSelectMinusOperator(): void {
    dispatch({ type: 'SELECT_MINUS_OPERATOR' });
  }

  function handleSelectMultiplicationOperator(): void {
    dispatch({ type: 'SELECT_MULTIPLICATION_OPERATOR' });
  }

  function handleSelectDivisionOperator(): void {
    dispatch({ type: 'SELECT_DIVISION_OPERATOR' });
  }

  function handleClickNumber(value: string): any {
    dispatch({ type: 'ADD_NUM', number: value });
  }

  function handleAddFloatPoint(): any {
    dispatch({ type: 'ADD_FLOAT_POINT', number: '.' });
  }

  function handleResetCalculator(): void {
    dispatch({ type: 'RESET_CALCULATOR' });
  }

  function handleClickResult(): void {
    dispatch({ type: 'SHOW_RESULT' });
  }

  const { num1, num2 , numeroDigitando, operator, result} = calculatorState

  // useEffect(() => {
  //   console.log('numeroDigitando xxxx -> ', numeroDigitando)
  // }, [numeroDigitando])

  // useEffect(() => {
  //   console.log('num1 xxxx -> ', num1)
  // }, [num1])

  // useEffect(() => {
  //   console.log('num2 xxxx -> ', num2)
  // }, [num2])

  // useEffect(() => {
  //   console.log('operator xxxx -> ', operator)
  // }, [operator])

  // useEffect(() => {
  //   console.log('result xxxx -> ', result)
  // }, [result])

  return (
    <div className="App">
      <div>
        <h1>React Calculator</h1>
        {/* <pre>{JSON.stringify(num1)}</pre> */}
      </div>
      <div className="card">
        <table>
        <thead>
          <tr>
            <td colSpan={4} style={{ fontWeight: 'bold', fontSize: 20 }}>
              { num1 !== '' ? num1 : '0'}
              { operator === 'plus' && ' + ' }  
              { operator === 'minus' && ' - ' }  
              { operator === 'multiplication' && ' x ' }  
              { operator === 'division' && ' / ' }  
              { num2 !== '' && num2 }
            </td>
          </tr>
          <tr>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>
              <button onClick={handleSelectDivisionOperator}>/</button>
            </td>
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
            <td>
              <button onClick={handleSelectMultiplicationOperator}>x</button>


            
            </td>
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
              <button onClick={handleSelectMinusOperator}>-</button>
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
              <button onClick={handleSelectPlusOperator}>+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClickNumber('0')}>0</button>
            </td>
            <td>
              <button onClick={handleAddFloatPoint}>.</button>
            </td>
            <td>
              <button onClick={handleResetCalculator}>AC</button>
            </td>
            <td>
              <button onClick={() => handleClickResult()}>=</button>
            </td>
          </tr>

        </tbody>
      </table>
      </div>
    </div>
  )
}

export default App
