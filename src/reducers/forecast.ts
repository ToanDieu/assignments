import { FETCH_FORECAST } from '../utils';

const defaultSate = {
    data: null,
    loading: false,
    error: false
}

const foreCastReducer = (state = defaultSate, action: { type: string, data?: any, error?: boolean } = { type: FETCH_FORECAST.REQUEST, data: null, error: false }) => {
    switch (action.type) {
        case FETCH_FORECAST.REQUEST:
            return { loading: true, data: null, error: false };
        case FETCH_FORECAST.SUCCESS:
            return { loading: false, data: action.data, error: false };
        case FETCH_FORECAST.FAILURE:
            return { loading: false, data: null, error: true };
        default:
            return state;
    }
}

export default foreCastReducer;