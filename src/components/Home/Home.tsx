import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import SearchBox from '../SearchBox/SearchBox';
import { SearchBoxState } from '../SearchBox/SearchBox';

import { SuggestionHint, SuggestionEntry } from '../SearchBox/Autocomplete/Autocomplete';

export interface HomeProps {
    initSearchBox: SearchBoxState;
    onChange: (state: SearchBoxState) => void;
    onChangeSuggestionHint: (suggestionHint: SuggestionHint) => void;
    
    loading: boolean;
    
    suggestions: SuggestionEntry[];
}

const Home: FunctionComponent<HomeProps> = props => {
  return <Grid container alignItems="flex-start">
    <Grid container item xs={12}>
      <SearchBox
        init={props.initSearchBox}
        suggestionName=""
        onChange={props.onChange} 
        onChangeSuggestionHint={props.onChangeSuggestionHint}
        horizontal = {true}
        suggestions = {props.suggestions}/>
    </Grid>
  </Grid>;
}

export default Home;