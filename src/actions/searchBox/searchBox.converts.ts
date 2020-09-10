import { SearchParameters } from "../../model/search";
import { SearchBoxState } from "@hotels/search-box";

export const createSearchParameterRequest = (
  searchBoxtate: SearchBoxState
): SearchParameters => {
  const { location, stay, occupancy } = searchBoxtate;
  return {
    locationType: location.type,
    locationCode: location.code,
    checkIn: stay.from?.format("YYYY-MM-DD"),
    checkOut: stay.to?.format("YYYY-MM-DD"),
    occupancy: occupancy.rooms
      .map(
        (room) =>
          room.adults +
          (room.childrenAges.length === 0 ? "" : "-") +
          room.childrenAges.join("-")
      )
      .join("!"),
    country: "US",
    locale: "en-US",
  };
};
