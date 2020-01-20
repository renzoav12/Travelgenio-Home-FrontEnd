import { createStore, combineReducers, applyMiddleware, compose, /* compose */ } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { searchSuggestionReducer, SearchSuggestion } from './reducers/searchSuggestionReducer';
import { RootAction } from './actions/action';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { history } from './history';

export interface RootState {
    readonly searchSuggestion: SearchSuggestion;
    readonly router: any;
}

const rootReducer = combineReducers<RootState>({
    searchSuggestion: searchSuggestionReducer,
    router: connectRouter(history),
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            routerMiddleware(history),
            reduxThunk as ThunkMiddleware<RootState, RootAction>
        )
    )
);