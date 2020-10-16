import {
    OfferActionTypes,
    OFFER_FETCH_START,
    OFFER_FETCH_FAILED,
    OFFER_FETCH_SUCCESS
} from  './offer.actionTypes'; 
import { RootState } from "../../store";
import axios, { AxiosResponse } from 'axios';
import {OfferProps} from '../../components/Offer/LastDestination';
import { ThunkAction } from 'redux-thunk';
import { RootAction } from '../action';
import { OriginHostHeader } from '../../api/headers';

export function offerFetchStart() : OfferActionTypes {
    return{
        type: OFFER_FETCH_START
    }
}

export function offerFetchSuccess(data: OfferProps) : OfferActionTypes {
    return{
        type: OFFER_FETCH_SUCCESS,
        payload: data
    }
}

export function offerFetchFailed() : OfferActionTypes {
    return{
        type: OFFER_FETCH_FAILED
    }
}

export const thunkOfferLoad = (url: string): ThunkAction<
void, RootState, null, RootAction> => {
     return async (dispatch) =>{
         dispatch(offerFetchStart());
         try {
             const response: AxiosResponse<OfferProps> = await axios.create({
                 headers: {
                     ...OriginHostHeader,
                 },
             }).post(url);
             dispatch(offerFetchSuccess(response.data));
        }catch(error) {
            dispatch(offerFetchFailed());
        } 
     };
};


