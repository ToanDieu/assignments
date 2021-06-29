import { FETCH_FORECAST } from '../utils';

export const fetchForeCast = (cityName: string) => ({ type: FETCH_FORECAST.REQUEST, cityName });