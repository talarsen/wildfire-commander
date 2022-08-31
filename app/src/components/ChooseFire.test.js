import * as React from "react";

import { render, waitFor, act, screen } from "@testing-library/react";

import { getIncidents as getIncidentsMock } from "../apiClient";

import ChooseFire from "./ChooseFire";

// Import the service, and I'm renaming it to make sure it's clear what's going on.
// TBH You don't need import to get mocking to work, but, by importing, you can
// control what your mocked service returns.

// Tell jest to "mock" all the objects within this `imported` file.
// It's a little confusing, but this actually mocks out the calls that our
// component under test, Tile, is using. The calls it makes are re-routed
// to our mock.
jest.mock("../apiClient");

test("loading ChooseFire", async () => {
  // As the test begins, change the behavior of our service.
  getIncidentsMock.mockResolvedValue([
    { incident_number: 54321, incident_name: "Birthday Candles" },
    { incident_number: 123, incident_name: "Zeppo Lighter" },
  ]);

  // Then write a regular test, noting the data is coming from our mock.
  const { getByText, findByText } = render(<ChooseFire />);

  // This is drawn on the initial render of the component, so it's here already.
  getByText("Select A Fire");
  await act(async () => getByText("Select A Fire"));
  // A call of `findByText('Candelabra')` will fail, because the data has not been fetched yet.
  // In order to make this work, we need a `waitFor` construct (or equivalent).
  screen.debug();
  console.log("****", screen.getByDisplayValue("Birthday Candles"));
  await waitFor(() => screen.getByDisplayValue("Birthday Candles"));
  // await findByText("Dixie");
});
