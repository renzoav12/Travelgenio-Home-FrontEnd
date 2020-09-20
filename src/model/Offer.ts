import { OfferProps} from "../components/Offer/Offer";
 
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
