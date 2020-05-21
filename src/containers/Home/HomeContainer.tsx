import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import Home, { HomeProps } from "../../components/Home/Home";
import { thunkSearchBoxChange } from "../../actions/searchBox/searchBox.action";
import { fetchSuggestionSearch } from "../../actions/suggestion/suggestion.action";
import { Container } from "@material-ui/core";
import moment from "moment";
import { loadI18n } from "../../actions/i18n/i18n.action";

const HomeContainer: FunctionComponent<HomeProps> = (props) => {
  useEffect(() => {
    props.loadI18n();
  }, []);

  const checkIn = moment().add(1, "month");
  const checkOut = moment().add(1, "month").add(1, "week");

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
            from: checkIn,
            to: checkOut,
          },
        }}
        onChange={props.onChange}
        onChangeSuggestionHint={props.onChangeSuggestionHint}
        loading={props.loading}
        suggestions={props.suggestions}
        promotions={props.promotions}
        loadI18n={props.loadI18n}
      />
    </Container>
  );
};

const mapStateToProps = (rootState: RootState) => {
  return {
    suggestions: rootState.searchSuggestion.suggestions,
  };
};

export default connect(mapStateToProps, {
  onChange: thunkSearchBoxChange,
  onChangeSuggestionHint: fetchSuggestionSearch,
  loadI18n: loadI18n,
})(HomeContainer);
