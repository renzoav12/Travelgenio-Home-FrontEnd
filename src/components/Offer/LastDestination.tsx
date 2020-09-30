export interface Offers {
  offers: Array<DestinationProps>;
  loadingStatus: string;
  offerLoad: (url: string) => void;

}

export interface OfferProps {
  regions: Array<DestinationProps>;
}

export interface DestinationProps {
  id: string;
  name: string;
  description: string;
  accommodations: Array<AccommodationProps>;
}

export interface AccommodationProps {
  id: String;
  pricing: PricingProps;
  content: AccommodationContentProps;
  checkIn: string;
  checkOut: string;
  type: string;
}

export interface PricingProps {
  nights: number;
  nightlyPrice: NightlyPriceProps;
}

export interface NightlyPriceProps {
  currency: string;
  amount: string;
}

export interface AccommodationContentProps {
  name: string;
  image: string;
  address: AddressAccommodationProps;
  category: CategoryAccommodationProps;
}

export interface AddressAccommodationProps {
  city: string,
  state: string,
  country: string
}

export interface CategoryAccommodationProps {
  code: string,
  name: string
}

export default LastDestination;