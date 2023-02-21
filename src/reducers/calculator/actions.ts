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

interface IAction {
  type: ActionTypes
}

export function selectPlusOperatorAction (): IAction {
  return {
    type: ActionTypes.SELECT_PLUS_OPERATOR
  }
}

export function selectMinusOperatorAction (): IAction {
  return {
    type: ActionTypes.SELECT_MINUS_OPERATOR
  }
}

export function selectMultiplicatorOperatorAction (): IAction {
  return {
    type: ActionTypes.SELECT_MULTIPLICATION_OPERATOR
  }
}

export function selectDivisionOperatorAction (): IAction {
  return {
    type: ActionTypes.SELECT_DIVISION_OPERATOR
  }
}

export function addNumAction (): IAction {
  return {
    type: ActionTypes.ADD_NUM
  }
}

export function addFloatPointAction (): IAction {
  return {
    type: ActionTypes.ADD_FLOAT_POINT
  }
}

export function resetCalculator (): IAction {
  return {
    type: ActionTypes.RESET_CALCULATOR
  }
}

export function showResult (): IAction {
  return {
    type: ActionTypes.SHOW_RESULT
  }
}