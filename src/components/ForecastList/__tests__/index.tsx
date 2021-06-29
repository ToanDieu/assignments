import { render, cleanup } from "@testing-library/react";

import ForecastList from "../index";

afterEach(cleanup);

describe("<ForecastList/>", () => {
  const data = {
    title: "London",
    forecast: [
      {
        applicable_date: "Today",
        max_temp: 18,
        min_temp: 13,
        the_temp: 18,
        weather_state_abbr: "lr",
        weather_state_name: "Light Rain",
      },
      {
        applicable_date: "Tomorrow",
        max_temp: 17,
        min_temp: 11,
        the_temp: 16,
        weather_state_abbr: "hc",
        weather_state_name: "Heavy Cloud",
      },
      {
        applicable_date: "Thursday 01, Jul",
        max_temp: 20,
        min_temp: 12,
        the_temp: 21,
        weather_state_abbr: "hc",
        weather_state_name: "Heavy Cloud",
      },
      {
        applicable_date: "Friday 02, Jul",
        max_temp: 24,
        min_temp: 13,
        the_temp: 23,
        weather_state_abbr: "s",
        weather_state_name: "Showers",
      },
      {
        applicable_date: "Saturday 03, Jul",
        max_temp: 20,
        min_temp: 14,
        the_temp: 20,
        weather_state_abbr: "hr",
        weather_state_name: "Heavy Rain",
      },
    ],
  };
  test("item should render correct number of items passed", () => {
    const { container } = render(<ForecastList data={data} />);
    const items = container.querySelectorAll(".forecast-item");

    expect(items).toHaveLength(5);
  });
});
