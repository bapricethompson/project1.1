import packing_lists from "../data/packingLists";

export function getPackingListForTrip(tripID: number): string[] {
  if (tripID in packing_lists) {
    return packing_lists[tripID];
  }
  return [];
}
