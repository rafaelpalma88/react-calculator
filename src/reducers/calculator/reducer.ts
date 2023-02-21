import { ActionTypes } from './actions'

interface Calculator {
  num1: string
  num2: string
  operator: string | null
  numeroDigitando: number
}

export const calculatorReducer = (state: Calculator, action: any): any => {
  switch (action.type) {
    case ActionTypes.ADD_NUM: {
      const number = action.number

      if (state.numeroDigitando === 1) {
        return { ...state, num1 : state.num1 + number } 
      } 
      if (state.numeroDigitando === 2) {
        return { ...state, num2 : state.num2 + number } 
      } 
    }

    case ActionTypes.ADD_FLOAT_POINT: {
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