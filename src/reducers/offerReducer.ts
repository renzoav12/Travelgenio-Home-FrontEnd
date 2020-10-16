import { Reducer } from 'redux';
import {Offer, Status} from '../model/Offer';
import {
    OFFER_FETCH_START,
    OFFER_FETCH_SUCCESS,
    OFFER_FETCH_FAILED
}from '../actions/offers/offer.actionTypes';
import { RootAction } from '../actions/action';


const initialState: Offer = {
    error: {
        exists: false,
      },
    offers: {
        regions: [
            {
                id: "",
                name: "",
                description: "",
                accommodations:[]
            }
        ]
    },
    offerStatus: Status.LOADING
}

export const offerReducer: Reducer<Offer, RootAction> = (
    state = initialState,
    action
) => {    
    switch (action.type) {
        case OFFER_FETCH_START:
            return {...state, offerStatus: Status.LOADING};
        case OFFER_FETCH_FAILED:
            return {...state, offerStatus: Status.EMPTY};            
        case OFFER_FETCH_SUCCESS:
            return {...state, offers: action.payload, offerStatus: Status.SUCCESS};   
        default:
            return state;
    }

    
};



