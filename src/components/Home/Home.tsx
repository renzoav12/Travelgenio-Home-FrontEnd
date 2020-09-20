import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import SearchBox from '@hotels/search-box';
import { SearchBoxState } from '@hotels/search-box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { SuggestionHint, SuggestionEntry } from '@hotels/search-box/dist/Autocomplete/Autocomplete';
import PaintingSquare from '../PaintingSquare/PaintingSquare';
import { PromotionEntry } from '../PaintingSquare/PaintingSquare';
import Keys from "@hotels/translation-keys";
import {translate} from "@hotels/translation";
import PropTypes from "prop-types";
import { LocaleState } from '../../reducers/localeReducer';
import Offer, { OfferProps } from '../Offer/Offer';

export interface HomeProps {
    initSearchBox: SearchBoxState;
    onChange: (state: SearchBoxState) => void;
    onChangeSuggestionHint: (suggestionHint: SuggestionHint) => void;
    loading: boolean;   
    suggestions: SuggestionEntry[];
    promotions: PromotionEntry[];
    loadI18n: () => void;
    initCobrand?: (url: string, emailSubscriptionUrl: string) => void;
    locale: LocaleState;
    offerLoad: (url : string) => void;
    offers: OfferProps;
    offerStatus: string;
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
  console.log(props.offerStatus);
  return <Grid container alignItems="flex-start">
    <Grid container item xs={12} className={classes.search}>
      <SearchBox
        init={props.initSearchBox}
        suggestionName=""
        onChange={props.onChange} 
        onChangeSuggestionHint={props.onChangeSuggestionHint}
        horizontal = {true}
        suggestions = {props.suggestions}
        title={translate(context, Keys.common.select_your_destination)}
        locale={props.locale.code === null ? "" : props.locale.code}/> 
      <Offer offers={props.offers} loadingStatus={props.offerStatus} offerLoad={props.offerLoad}/>      
    </Grid>
  </Grid>;
}
Home.contextTypes = { t: PropTypes.func };

export default Home;