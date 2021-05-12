
import { useState } from 'react';

export const useCalculator = ({ variables = {}, formulas = {}, ...rest }) => {
  const [state, setState] = useState({
    values: {},
    results: {},
  });

  const models = {};

  const calculate = () => {
    const results = {};
    Object.keys(formulas).forEach((key) => {
      const restFormulas = { ...formulas, [key]: undefined };
      results[key] = formulas[key](state.values, restFormulas);
    });

    setState({
      ...state,
      results,
    });
  };

  const isReady = () =>
    !Object.keys(variables).some((key) => {
      const { required } = variables[key];
      const variableValue = state.values[key];
      return required && (variableValue === 0 || !variableValue);
    });

  const valueChangeHandler = (value, key) => {
    const newValues = { ...state.values, [key]: value };
    let ready = true;
    Object.keys(variables).forEach((key) => {
      const variable = variables[key];
    });
    setState({
      ...state,
      values: newValues,
    });
  };

  Object.keys(variables).forEach((key) => {
    models[key] = {
        type: variables[key].type,
        value: state.values[key] || '',
        onChange: ({ target: { value } }) => valueChangeHandler(value, key)
    };
  });

  return { ...state, ready: isReady(), calculate, models };
};
