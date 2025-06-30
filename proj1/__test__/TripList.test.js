import { fireEvent, render } from "@testing-library/react-native";
import { onPressMock } from "expo-router";
import trips from "../app/data/trips";
import Trips from "../app/tripList";

jest.mock("expo-router", () => {
  const React = require("react");

  const onPressMock = jest.fn();

  return {
    Link: ({ children, href }) => {
      return React.cloneElement(children, {
        onPress: () => onPressMock(href),
      });
    },
    __esModule: true,
    onPressMock,
  };
});

describe("Trips component", () => {
  it("renders all trips", () => {
    const { getByText } = render(<Trips />);

    trips.forEach((trip) => {
      expect(getByText(trip.location)).toBeTruthy();
      expect(
        getByText(`${trip.date_range.start} – ${trip.date_range.end}`)
      ).toBeTruthy();
    });
  });

  it("tests click on trip card goes to new page", () => {
    const { getByTestId } = render(<Trips />);
    const firstTripCard = getByTestId(`trip-card-${trips[0].id}`);
    expect(firstTripCard).toBeTruthy();
    fireEvent.press(firstTripCard);
    expect(onPressMock).toHaveBeenCalledWith(
      `/packingList?tripID=${trips[0].id}`
    );
  });

  it("find trup cards by Accessibility role", () => {
    const { getAllByRole } = render(<Trips />);
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(trips.length);
  });

  it("find trup cards by Accessibility label", () => {
    const { getByLabelText } = render(<Trips />);
    const label = getByLabelText(`Trip to ${trips[0].location}`);
    expect(label).toBeTruthy();
  });
});
