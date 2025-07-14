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
    const getPackinButton = await screen.findByText(/get packin/i);
    await user.press(getPackinButton);

    expect(screen).toHavePathname("/tripList");

    const tripCard = await screen.findByText(/paris, france/i);
    await user.press(tripCard);

    await waitFor(() => {
      expect(screen).toHavePathname("/packingList");
    });

    const checkbox = await screen.findByRole("checkbox", { name: /passport/i });
    await user.press(checkbox);

    const itemText = screen.getByText(/passport/i);
    expect(itemText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ textDecorationLine: "line-through" }),
      ])
    );
  });
});
