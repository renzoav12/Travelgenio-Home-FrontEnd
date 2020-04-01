import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import Home, { HomeProps } from '../../components/Home/Home';
import { thunkSearchBoxChange } from '../../actions/searchBox/searchBox.action';
import { fetchSuggestionSearch } from '../../actions/suggestion/suggestion.action';
import { Container } from "@material-ui/core";
import moment from 'moment';

const HomeContainer: FunctionComponent<HomeProps> = props => {
  
  return <Container maxWidth="lg">
        <Home
          initSearchBox = {
            {
              location: {
                  code: '',
                  type: ''
              },
              occupancy: {
                  rooms: [{
                      adults: 2,
                      childrenAges: []
                  }]
              },
              stay: {
                  from: moment(),
                  to: moment()
              }
            }
          }
          onChange={props.onChange}
          onChangeSuggestionHint={props.onChangeSuggestionHint}
          loading={props.loading}
          suggestions={props.suggestions}
          promotions= {props.promotions}
          />
      </Container>;
}

const mapStateToProps = (rootState: RootState) => {
    return {
      suggestions: rootState.searchSuggestion.suggestions
    };
};

export default connect(
    mapStateToProps,
    {
        onChange: thunkSearchBoxChange,
        onChangeSuggestionHint: fetchSuggestionSearch
    }
)(HomeContainer);
