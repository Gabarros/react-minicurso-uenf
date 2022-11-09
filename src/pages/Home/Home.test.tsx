import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import Home from "./Home";

describe("Home tests", () => {
  it("calls the load pokemon list function on button click", () => {
    const { getByTestId } = render(<Home />);
    const loadButton = getByTestId("load-button");
    const loadPokemonData = jest.fn();

    fireEvent.click(loadButton);

    waitFor(() => expect(loadPokemonData).toHaveBeenCalledTimes(1));
  });

  it("calls the clean pokemon list function on button click", () => {
    const { getByTestId } = render(<Home />);
    const cleanPokemonsList = jest.fn();

    const cleanButton = getByTestId("clean-list-button");
    fireEvent.click(cleanButton);

    waitFor(() => expect(cleanPokemonsList).toHaveBeenCalledTimes(1));
  });

  it("not shows the more pokemon button if theres no list", () => {
    const { queryByTestId } = render(<Home />);

    expect(queryByTestId("more-button")).toBeFalsy();
  });

  it("shows the more pokemon button if theres a pokemon list", () => {
    const { getByTestId, queryByTestId } = render(<Home />);
    const loadButton = getByTestId("load-button");

    fireEvent.click(loadButton);

    waitFor(() => expect(queryByTestId("more-button")).toBeTruthy());
  });
});
