import { ActionTypes } from './actions'

interface Calculator {
  num1: string | number
  num2: string
  operator: string | null
  numeroDigitando: number
}

interface CalculatorAction {
  type: ActionTypes,
  payload?: {
    number?: string
  }
}

export const calculatorReducer = (state: Calculator, action: CalculatorAction): Calculator => {
  switch (action.type) {
    case ActionTypes.ADD_NUM: {
      const number = action?.payload?.number

      if (state.numeroDigitando === 1 && number) {
        return { ...state, num1 : state.num1 + number} 
      } 
      if (state.numeroDigitando === 2) {
        return { ...state, num2 : state.num2 + number } 
      } 
    }

    case ActionTypes.ADD_FLOAT_POINT: {

      if (state.numeroDigitando === 1) {
        const num1String = String(state.num1)
        return { 
          ...state, 
          num1 : !num1String.includes('.') ? state.num1 + '.' : state.num1 
        } 
      } 
      if (state.numeroDigitando === 2) {
        const num2String =  String(state.num2)
        return { 
          ...state, 
          num2 : !num2String.includes('.') ? state.num2 + '.' : state.num2
        } 
      } 
    }
    case ActionTypes.SELECT_PLUS_OPERATOR: {
      return { 
        ...state, 
        operator: 'plus', 
        numeroDigitando: 2 
      } 
    }
    case ActionTypes.SELECT_MINUS_OPERATOR: {
      return { 
        ...state, 
        operator: 'minus', 
        numeroDigitando: 2 
      } 
    }
    case ActionTypes.SELECT_MULTIPLICATION_OPERATOR: {
      return { 
        ...state, 
        operator: 'multiplication', 
        numeroDigitando: 2 
      } 
    }
    case ActionTypes.SELECT_DIVISION_OPERATOR: {
      return { 
        ...state, 
        operator: 'division', 
        numeroDigitando: 2 
      } 
    }
    case ActionTypes.SHOW_RESULT: {
      switch (state.operator) {
        case 'plus': 
          return {
            ...state,
            num1: Number(state.num1) + Number(state.num2),
            num2: '',
            operator: null,
            numeroDigitando: 1
          };
        case 'minus': 
          return {
            ...state,
            num1: Number(state.num1) - Number(state.num2),
            num2: '',
            operator: null,
            numeroDigitando: 1
          };
        case 'multiplication': 
          return {
            ...state,
            num1: Number(state.num1) * Number(state.num2),
            num2: '',
            operator: null,
            numeroDigitando: 1
          };
        case 'division': 
          return {
            ...state,
            num1: Number(state.num1) / Number(state.num2),
            num2: '',
            operator: null,
            numeroDigitando: 1
          };
        default:
          return {
            ...state,
          };
      }
    }
    case ActionTypes.RESET_CALCULATOR: {
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