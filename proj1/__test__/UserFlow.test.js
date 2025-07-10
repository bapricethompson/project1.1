import {
  renderRouter,
  screen,
  userEvent,
  waitFor,
} from "expo-router/testing-library";
import RootLayout from "../app/_layout";
import Index from "../app/index";
import PackingListPage from "../app/packingList";
import TripListPage from "../app/tripList";

describe("view a packing list", () => {
  it("view a packing list", async () => {
    const user = userEvent.setup();
    waitFor(() => {
      renderRouter(
        {
          _layout: () => <RootLayout />,
          index: () => <Index />,
          tripList: () => <TripListPage />,
          packingList: () => <PackingListPage />,
        },
        {
          initialUrl: "/",
        }
      );
    });
    const button = await screen.findByTestId("get-packin-button");
    await user.press(button);

    expect(screen).toHavePathname("/tripList");

    const tripCard = await screen.findByTestId("trip-card-1");
    await user.press(tripCard);

    await waitFor(() => {
      expect(screen).toHavePathname("/packingList");
    });

    const checkbox = await screen.findByTestId("checkbox-0");
    await user.press(checkbox);

    const itemText = screen.getByTestId("item-text-0");
    expect(itemText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ textDecorationLine: "line-through" }),
      ])
    );
  });
});
