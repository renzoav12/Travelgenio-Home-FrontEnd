import { SearchSuggestionAction } from "./suggestion/suggestion.action";
import { OfferActionTypes } from "./offers/offer.actionTypes";

export type RootAction = 
    SearchSuggestionAction  | OfferActionTypes;