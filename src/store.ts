import { createStore, combineReducers, applyMiddleware, compose, /* compose */ } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { searchSuggestionReducer, SearchSuggestion } from './reducers/searchSuggestionReducer';
import { RootAction } from './actions/action';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { history } from './history';
import { i18nState } from 'redux-i18n';
import { localeReducer, LocaleState } from './reducers/localeReducer';
import { cobrandReducer } from '@hotels/header-footer';

export interface RootState {
    readonly searchSuggestion: SearchSuggestion;
    readonly locale: LocaleState;
    readonly router: any;
    readonly i18nState: any;
    readonly cobrand: any;
}

const rootReducer = combineReducers<RootState>({
    searchSuggestion: searchSuggestionReducer,
    locale: localeReducer,
    router: connectRouter(history),
    i18nState: i18nState,
    cobrand: cobrandReducer
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