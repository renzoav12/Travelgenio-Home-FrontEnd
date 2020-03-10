import { SearchBoxState } from '@hotels/search-box';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store';
import { RootAction } from '../action';
import { createSearchParameterRequest } from './searchBox.converts';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;

export const thunkSearchBoxChange = (searchBoxState: SearchBoxState): ThunkResult<void> => async dispatch => {
  const params = createSearchParameterRequest(searchBoxState);
  const url = `/hotels/search/${params.locationType}/${params.locationCode}/${params.checkIn}/${params.checkOut}/${params.occupancy}/es`;
  console.info("change to " + url);
  window.location.href = url;
};

