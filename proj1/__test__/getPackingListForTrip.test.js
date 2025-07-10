import { getPackingListForTrip } from "../app/utils/getPackingListForTrip";

describe("getPackingListForTrip", () => {
  it("returns the packing list for a valid trip ID", () => {
    const result = getPackingListForTrip(1);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it("returns an empty array for an invalid trip ID", () => {
    const result = getPackingListForTrip(999);
    expect(result).toEqual([]);
  });
});
