import { axiosInstance } from './index';

const getBaseInfoByCityName = (cityName: string) => {
    return axiosInstance.get(`/api/location/search?query=${cityName}`);
}

const getForecastByWoeid = (woeid: number) => {
    return axiosInstance.get(`/api/location/${woeid}`);
}

export { getBaseInfoByCityName, getForecastByWoeid };