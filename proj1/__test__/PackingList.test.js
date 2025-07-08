import {
  fireEvent,
  render,
  userEvent,
  waitFor,
} from "@testing-library/react-native";
import packing_lists from "../app/data/packingLists";
import PackingList from "../app/packingList";

describe("PackingList Screen", () => {
  const tripID = 1;

  const setup = () => {
    const utils = render(<PackingList tripID={tripID} />);
    return {
      ...utils,
      packingList: packing_lists[tripID],
    };
  };

  it("renders all packing items", () => {
    const { getByText, packingList } = setup();

    packingList.forEach((item) => {
      expect(getByText(item)).toBeTruthy();
    });
  });

  it("toggles checkbox state on press", () => {
    const { getByTestId } = setup();

    const checkbox = getByTestId("checkbox-0");
    fireEvent.press(checkbox);

    const itemText = getByTestId("item-text-0");

    expect(itemText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ textDecorationLine: "line-through" }),
      ])
    );
  });

  it('shows "No packing list found" when tripID is invalid', () => {
    const { getByText } = render(<PackingList tripID={999} />);
    expect(getByText(/no packing list found/i)).toBeTruthy();
  });

  it("renders the heading", () => {
    const { getByText } = setup();
    expect(getByText(/your items/i)).toBeTruthy();
  });

  it("marks an item as checked using userEvent", async () => {
    const { getByTestId } = render(<PackingList tripID={1} />);

    const checkbox = getByTestId("checkbox-0");

    await userEvent.press(checkbox);

    await waitFor(() => {
      const itemText = getByTestId("item-text-0");
      expect(itemText.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ textDecorationLine: "line-through" }),
        ])
      );
    });
  });
});
