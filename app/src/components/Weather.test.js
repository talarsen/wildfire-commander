import { render } from "@testing-library/react";

import Weather from "./Weather";
const weatherData = {
  coord: { lon: -121.23, lat: 40.01 },
  weather: [
    { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" },
  ],
  base: "stations",
  main: {
    temp: 54.48,
    feels_like: 53.38,
    temp_min: 52.83,
    temp_max: 60.46,
    pressure: 1019,
    humidity: 80,
    sea_level: 1019,
    grnd_level: 935,
  },
  visibility: 10000,
  wind: { speed: 6.98, deg: 186, gust: 13.87 },
  clouds: { all: 86 },
  dt: 1636047563,
  sys: {
    type: 2,
    id: 19182,
    country: "US",
    sunrise: 1636036670,
    sunset: 1636073947,
  },
  timezone: -25200,
  id: 5385487,
  name: "Quincy",
  cod: 200,
};
test("should show name of city weather", () => {
  const { getByText } = render(<Weather weatherData={weatherData} />);
  expect(getByText("Quincy")).toBeTruthy();
});

test("should show wind speed", () => {
  const { getByText } = render(<Weather weatherData={weatherData} />);
  expect(getByText("6.98 mph")).toBeTruthy();
});

test("should show temperature", () => {
  const { getByText } = render(<Weather weatherData={weatherData} />);

  expect(getByText("54 °F")).toBeTruthy();
});

test("should show humidity", () => {
  const { getByText } = render(<Weather weatherData={weatherData} />);
  expect(getByText("80%")).toBeTruthy();
});
