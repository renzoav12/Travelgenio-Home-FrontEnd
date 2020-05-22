import React, { FunctionComponent } from 'react';
import { Grid, Box } from '@material-ui/core';
import SearchBox from '@hotels/search-box';
import { SearchBoxState } from '@hotels/search-box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { SuggestionHint, SuggestionEntry } from '@hotels/search-box/dist/Autocomplete/Autocomplete';
import PaintingSquare from '../PaintingSquare/PaintingSquare';
import { PromotionEntry } from '../PaintingSquare/PaintingSquare';
import Keys from "@hotels/translation-keys";
import {translate} from "@hotels/translation";
import PropTypes from "prop-types";

export interface HomeProps {
    initSearchBox: SearchBoxState;
    onChange: (state: SearchBoxState) => void;
    onChangeSuggestionHint: (suggestionHint: SuggestionHint) => void;
    loading: boolean;   
    suggestions: SuggestionEntry[];
    promotions: PromotionEntry[];
    loadI18n: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      marginTop: 20,
      width: "100%"
    }
  }),
);

const Home: FunctionComponent<HomeProps> = (props, context) => {
  const classes = useStyles();
  console.log(Keys.common.select_your_destination);
  return <Grid container alignItems="flex-start">
    <Grid container item xs={12} className={classes.search}>
      <SearchBox
        init={props.initSearchBox}
        suggestionName=""
        onChange={props.onChange} 
        onChangeSuggestionHint={props.onChangeSuggestionHint}
        horizontal = {true}
        suggestions = {props.suggestions}
        title={translate(context, Keys.common.select_your_destination)}/>
      <PaintingSquare 
            loading ={true} promotions = {props.promotions} />      
    </Grid>
  </Grid>;
}
Home.contextTypes = { t: PropTypes.func };

export default Home;