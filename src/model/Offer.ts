import { OfferProps} from "../components/Offer/LastDestination";
 
export interface Offer {
       offers: OfferProps,
       error: OfferError,
       offerStatus: Status
}

export interface OfferError {
    exists: boolean;
    code?: string;
    message?: string;
}

export enum Status {
    EMPTY = 'Empty',
    LOADING = 'Loading',
    SUCCESS = 'Success'
}
