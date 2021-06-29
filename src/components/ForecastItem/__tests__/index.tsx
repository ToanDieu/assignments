import { render, cleanup } from "@testing-library/react";

import ForecastItem from "../index";

afterEach(cleanup);

describe("<ForecastItem/>", () => {
  const applicable_date = "today";

  const weather_state_abbr = "lr";
  const weather_state_name = "light rain";

  const max_temp = 10;
  const min_temp = 8;
  test("item should render correct passed values", () => {
    const { container } = render(
      <ForecastItem
        applicable_date={applicable_date}
        max_temp={max_temp}
        min_temp={min_temp}
        weather_state_abbr={weather_state_abbr}
        weather_state_name={weather_state_name}
      />
    );
    const titleSpan = container.querySelector("span.forecast-item__title");

    const statusDesSpan = container.querySelector("span.status__text");
    const imgStatus = container.querySelector("img.status__icon");

    const tempSpans = container.querySelectorAll("span.forecast-item__celsius");

    expect(titleSpan?.textContent).toBe(applicable_date);

    expect(statusDesSpan?.textContent).toBe(weather_state_name);
    expect(imgStatus).toHaveProperty(
      "src",
      `https://www.metaweather.com//static/img/weather/${weather_state_abbr}.svg`
    );

    expect(tempSpans[0].textContent).toContain(max_temp);
    expect(tempSpans[1].textContent).toContain(min_temp);
  });

  test("should render and match snapshort", () => {
    const { container } = render(
      <ForecastItem
        applicable_date={applicable_date}
        max_temp={max_temp}
        min_temp={min_temp}
        weather_state_abbr={weather_state_abbr}
        weather_state_name={weather_state_name}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
