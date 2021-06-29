import "./index.scss";

type Props = {
  applicable_date: string;
  max_temp: number;
  min_temp: number;
  weather_state_abbr: string;
  weather_state_name: string;
};

export default function ForecastItem(props: Props) {
  return (
    <div className={"forecast-item"}>
      <span className={"forecast-item__title"}>{props.applicable_date}</span>
      <div className={"forecast-item__status status"}>
        <img
          className={"status__icon"}
          alt={props.weather_state_abbr}
          src={`https://www.metaweather.com//static/img/weather/${props.weather_state_abbr}.svg`}
        />
        <span className={"status__text"}>{props.weather_state_name}</span>
      </div>
      <span className={"forecast-item__celsius"}>
        {`Max: ${props.max_temp} `}&#8451;
      </span>
      <span className={"forecast-item__celsius"}>
        {`Min: ${props.min_temp} `}&#8451;
      </span>
    </div>
  );
}
