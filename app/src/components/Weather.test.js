import { render, screen } from "@testing-library/react";

import Weather from "./Weather";

test("should show Weather component", () => {
  render(<Weather />);
});
// render the city name on the screen
