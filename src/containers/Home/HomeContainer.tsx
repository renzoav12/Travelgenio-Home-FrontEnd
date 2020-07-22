import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import Home, { HomeProps } from "../../components/Home/Home";
import { thunkSearchBoxChange } from "../../actions/searchBox/searchBox.action";
import { fetchSuggestionSearch } from "../../actions/suggestion/suggestion.action";
import { Container } from "@material-ui/core";
import { loadI18n } from "../../actions/i18n/i18n.action";
import { initCobrand } from "@hotels/header-footer";
import config from "../../config";

const HomeContainer: FunctionComponent<HomeProps> = (props) => {
  useEffect(() => {
    props.loadI18n();
    props.initCobrand && props.initCobrand(config.COBRAND, config.EMAIL_SUBSCRIPTION);
  }, []);

  return (
    <Container maxWidth="lg">
      <Home
        initSearchBox={{
          location: {
            code: "",
            type: "",
          },
          occupancy: {
            rooms: [
              {
                adults: 2,
                childrenAges: [],
              },
            ],
          },
          stay: {
            from: undefined,
            to: undefined,
          },
        }}
        onChange={props.onChange}
        onChangeSuggestionHint={props.onChangeSuggestionHint}
        loading={props.loading}
        suggestions={props.suggestions}
        promotions={props.promotions}
        loadI18n={props.loadI18n}
        locale={props.locale}
      />
    </Container>
  );
};

const mapStateToProps = (rootState: RootState) => {
  return {
    suggestions: rootState.searchSuggestion.suggestions,
    locale: rootState.locale
  };
};

export default connect(mapStateToProps, {
  onChange: thunkSearchBoxChange,
  onChangeSuggestionHint: fetchSuggestionSearch,
  loadI18n: loadI18n,
  initCobrand: initCobrand,
})(HomeContainer);
