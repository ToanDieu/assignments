const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

// automate create req actiontypes
const createActionTypes = (base: any) => ({
  [REQUEST]: `${base}_${REQUEST}`,
  [SUCCESS]: `${base}_${SUCCESS}`,
  [FAILURE]: `${base}_${FAILURE}`
});

export const FETCH_FORECAST = createActionTypes('FETCH_FORECAST');