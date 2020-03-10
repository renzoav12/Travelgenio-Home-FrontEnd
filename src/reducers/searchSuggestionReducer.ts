import _ from 'lodash';
import { Reducer } from 'redux';
import { SearchSuggestionAction, SearchSuggestionsActionTypes } from '../actions/suggestion/suggestion.action';
import { SuggestionEntry } from '@hotels/search-box/dist/Autocomplete/Autocomplete';

export interface SearchSuggestion {
    suggestions: Array<SuggestionEntry>;
    loading: boolean;
    error: String | null
}

const initialState = {
    suggestions: [],
    loading: false,
    error: null
};

export const searchSuggestionReducer: Reducer<SearchSuggestion, SearchSuggestionAction> = (
    state = initialState, 
    action
) => {
    switch (action.type) {
        case SearchSuggestionsActionTypes.FETCH:
            return { ...state, loading: true };
        case SearchSuggestionsActionTypes.FETCH_FAILED:
            return { ...state, loading: false };
        case SearchSuggestionsActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                suggestions: action.suggestions,
                loading: false
            };
        default:
            return state;
    }
};
