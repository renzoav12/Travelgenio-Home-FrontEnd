import { Action } from "redux";
import {OfferProps} from '../../components/Offer/LastDestination';

export const OFFER_FETCH_START = 'OFFER_FETCH_START';
export const OFFER_FETCH_SUCCESS = 'OFFER_FETCH_SUCCESS';
export const OFFER_FETCH_FAILED = 'OFFER_FETCH_FAILED';
export const OFFER_UPDATE = 'OFFER_UPDATE';
export const OFFER_SEARCH = 'OFFER_SEARCH';


export interface OfferFetchStartAction extends Action<typeof OFFER_FETCH_START> {
}

export interface OfferFetchFailedAction extends Action<typeof OFFER_FETCH_FAILED> {
}

export interface OfferFetchSuccessAction extends Action<typeof OFFER_FETCH_SUCCESS> {
    payload: OfferProps
}

export interface OfferSearchAction extends Action<typeof OFFER_SEARCH> {
    readonly id: string;
}

export type OfferActionTypes =
    | OfferFetchStartAction
    | OfferFetchFailedAction
    | OfferFetchSuccessAction
    | OfferSearchAction;
