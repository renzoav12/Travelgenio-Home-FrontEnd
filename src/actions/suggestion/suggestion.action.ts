import search from '../../api/suggestions/suggestions';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { RootState } from '../../store';
import { AxiosResponse } from 'axios';
import { RootAction } from '../action';
import { SuggestionEntry } from '@hotels/search-box/dist/Autocomplete/Autocomplete';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;

export enum SearchSuggestionsActionTypes {
    FETCH = 'FETCH_SEARCH_SUGGESTIONS',
    FETCH_SUCCESS = 'FETCH_SEARCH_SUGGESTIONS_SUCCESS',
    FETCH_FAILED = 'FETCH_SEARCH_SUGGESTIONS_FAILED'
}

interface FetchSearchSuggestion {
    type: SearchSuggestionsActionTypes.FETCH;
}

interface FetchSearchSuggestionSuccess {
    type: SearchSuggestionsActionTypes.FETCH_SUCCESS;
    suggestions: Array<SuggestionEntry>;
}

interface FetchSearchSuggestionFailed {
    type: SearchSuggestionsActionTypes.FETCH_FAILED;
}

export interface SearchSuggestionParameters {
    readonly text: string;
}

export interface SearchNameSuggestionParameters {
  readonly type: string;
  readonly code: string;
}

export const fetchSuggestionSearch = (queryParameters: SearchSuggestionParameters): ThunkResult<void> => async dispatch => {
    handleFetchSuggestionSearch(dispatch);
    try {
        const response: AxiosResponse<Array<SuggestionEntry>> = await search.get('/autocomplete', {
            params: queryParameters
        });
        handleSuggestionSearchSuccess(dispatch, response.data);
    } catch (e) {
        handleSuggestionSearchFailed(dispatch);
    }
};

export const handleFetchSuggestionSearch = (dispatch: Dispatch<FetchSearchSuggestion>) => {
    dispatch({
        type: SearchSuggestionsActionTypes.FETCH
    });
};

export const handleSuggestionSearchSuccess = (
    dispatch: Dispatch<FetchSearchSuggestionSuccess>,
    response: Array<SuggestionEntry>
) => {
    dispatch({
        type: SearchSuggestionsActionTypes.FETCH_SUCCESS,
        suggestions: response
    });
};

export const handleSuggestionSearchFailed = (dispatch: Dispatch<FetchSearchSuggestionFailed>) => {
    dispatch({
        type: SearchSuggestionsActionTypes.FETCH_FAILED
    });
};


export type SearchSuggestionAction = 
    | FetchSearchSuggestion 
    | FetchSearchSuggestionSuccess 
    | FetchSearchSuggestionFailed;
;
