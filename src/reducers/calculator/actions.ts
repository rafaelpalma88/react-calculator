export enum ActionTypes {
  SELECT_PLUS_OPERATOR = 'SELECT_PLUS_OPERATOR',
  SELECT_MINUS_OPERATOR = 'SELECT_MINUS_OPERATOR',
  SELECT_MULTIPLICATION_OPERATOR = 'SELECT_MULTIPLICATION_OPERATOR',
  SELECT_DIVISION_OPERATOR = 'SELECT_DIVISION_OPERATOR',
  ADD_NUM = 'ADD_NUM',
  ADD_FLOAT_POINT = 'ADD_FLOAT_POINT',
  RESET_CALCULATOR = 'RESET_CALCULATOR',
  SHOW_RESULT = 'SHOW_RESULT'
}

export function selectPlusOperatorAction (): any {
  return {
    type: ActionTypes.SELECT_PLUS_OPERATOR
  }
}

export function selectMinusOperatorAction (): any {
  return {
    type: ActionTypes.SELECT_MINUS_OPERATOR
  }
}

export function selectMultiplicatorOperatorAction (): any {
  return {
    type: ActionTypes.SELECT_MULTIPLICATION_OPERATOR
  }
}

export function selectDivisionOperatorAction (): any {
  return {
    type: ActionTypes.SELECT_DIVISION_OPERATOR
  }
}

export function addNumAction (): any {
  return {
    type: ActionTypes.ADD_NUM
  }
}

export function addFloatPointAction (): any {
  return {
    type: ActionTypes.ADD_FLOAT_POINT
  }
}

export function resetCalculator (): any {
  return {
    type: ActionTypes.RESET_CALCULATOR
  }
}

export function showResult (): any {
  return {
    type: ActionTypes.SHOW_RESULT
  }
}