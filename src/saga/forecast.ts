import { put, call, all, takeLatest } from 'redux-saga/effects';
import moment from 'moment';

import { FETCH_FORECAST } from '../utils';
import { getBaseInfoByCityName, getForecastByWoeid } from '../api/forcecast';
import { BASE_RES, FORECAST_ITEM_RES, ResponseDTO } from '../dto';

function* fetchForeCast (action: any)  {
    try {
        const baseRes: ResponseDTO = yield call(getBaseInfoByCityName, action.cityName);
        const baseResData: BASE_RES[] = baseRes.data;
        if (baseResData.length > 0) {
            let forecast: FORECAST_ITEM_RES[] = [], title = "";
            const currentDate = moment().format('dddd DD, MMM');
            const tomorrow  = moment().add(1,'days').format('dddd DD, MMM');
            const info: BASE_RES = baseResData[0];
            title = info.title;

            const forcastRes: ResponseDTO = yield call(getForecastByWoeid, info.woeid);
            const forcastResData: { consolidated_weather: FORECAST_ITEM_RES[] } = forcastRes.data;
            const consolidatedWeather: FORECAST_ITEM_RES[] = forcastResData.consolidated_weather;
            consolidatedWeather.forEach((weather: FORECAST_ITEM_RES, index: number) => {
                const weatherSaved: FORECAST_ITEM_RES = { applicable_date: "", max_temp: 0, min_temp: 0, the_temp: 0, weather_state_abbr: "", weather_state_name: "" };
                if (index <= 4) {
                    let applicable_date = moment(weather.applicable_date).format('dddd DD, MMM');
                    const isToday = moment(currentDate).isSame(applicable_date, 'day');
                    const isTomorrow = moment(tomorrow).isSame(applicable_date, 'day');
                    if (isToday) {
                        applicable_date = 'Today';
                    }
                    if (isTomorrow) {
                        applicable_date = 'Tomorrow';
                    }
                    const max_temp = Math.floor(weather.max_temp);
                    const min_temp = Math.floor(weather.min_temp);
                    const the_temp = Math.floor(weather.the_temp);
                    const weather_state_abbr = weather.weather_state_abbr;
                    const weather_state_name = weather.weather_state_name;

                    weatherSaved.applicable_date = applicable_date;
                    weatherSaved.max_temp = max_temp;
                    weatherSaved.min_temp = min_temp;
                    weatherSaved.the_temp = the_temp;
                    weatherSaved.weather_state_abbr = weather_state_abbr;
                    weatherSaved.weather_state_name = weather_state_name;

                    forecast.push(weatherSaved);
                }
            });
            yield put({ type: FETCH_FORECAST.SUCCESS, data: { title, forecast } });
        } else {
            yield put({ type: FETCH_FORECAST.SUCCESS, data: { title: '', forecast: [] }});
        }
    } catch (error) {
        yield put({ type: FETCH_FORECAST.FAILURE });
    }
}
export default function* root () {
    yield all([
        takeLatest(FETCH_FORECAST.REQUEST, fetchForeCast)
    ]);
}