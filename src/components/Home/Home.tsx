import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import SearchBox from '../SearchBox/SearchBox';
import PaintingSquare from '../PaintingSquare/PaintingSquare';
import { SearchBoxState } from '../SearchBox/SearchBox';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { SuggestionHint, SuggestionEntry } from '../SearchBox/Autocomplete/Autocomplete';
import { PromotionEntry } from '../PaintingSquare/PaintingSquare';

export interface HomeProps {
    initSearchBox: SearchBoxState;
    onChange: (state: SearchBoxState) => void;
    onChangeSuggestionHint: (suggestionHint: SuggestionHint) => void;
    loading: boolean;   
    suggestions: SuggestionEntry[];
    promotions: PromotionEntry[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      marginTop: 20,
      marginBottom: 20
    }
  }),
);

const Home: FunctionComponent<HomeProps> = props => {
  const classes = useStyles();
  
  return <Grid container alignItems="flex-start">
    <Grid container item xs={12} className={classes.search}>
      <SearchBox
        init={props.initSearchBox}
        suggestionName=""
        onChange={props.onChange} 
        onChangeSuggestionHint={props.onChangeSuggestionHint}
        horizontal = {true}
        suggestions = {props.suggestions}/>
      <PaintingSquare 
            loading ={true} promotions = {props.promotions} />      
    </Grid>
  </Grid>;
}

export default Home;