export interface ResponseDTO {
    data: any;
    status: number;
}

export type BASE_RES = {
    latt_long: string, location_type: string, title: string, woeid: number
}

export type FORECAST_ITEM_RES = {
    applicable_date: string,
    max_temp: number,
    min_temp: number,
    the_temp: number,
    weather_state_abbr: string,
    weather_state_name: string
}

export type LIST_DATA = {
    title: string,
    forecast: FORECAST_ITEM_RES[]
}