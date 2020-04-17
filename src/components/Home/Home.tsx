import React, { FunctionComponent } from 'react';
import { Grid, Box } from '@material-ui/core';
import SearchBox from '@hotels/search-box';
import { SearchBoxState } from '@hotels/search-box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { SuggestionHint, SuggestionEntry } from '@hotels/search-box/dist/Autocomplete/Autocomplete';
import PaintingSquare from '../PaintingSquare/PaintingSquare';
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
      width: "100%"
    }
  }),
);

const Home: FunctionComponent<HomeProps> = props => {
  const classes = useStyles();
  
  return <Grid container alignItems="flex-start">
    <Grid container item xs={12}>
      <Box className={classes.search} >
        <SearchBox
          init={props.initSearchBox}
          suggestionName=""
          onChange={props.onChange} 
          onChangeSuggestionHint={props.onChangeSuggestionHint}
          horizontal = {true}
          suggestions = {props.suggestions}
          title = {"Selecciona tu destino"}/>
      </Box>
      <PaintingSquare 
            loading ={true} promotions = {props.promotions} />      
    </Grid>
  </Grid>;
}

export default Home;