import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions Type & Creators
 */

const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null,
});

// Types: {LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE}
// Creators:
/**
 * loadRequest: (data) => ({type: 'LOAD_REQUEST'})
 * loadSucess: (data) => ({type: 'LOAD_SUCCESS', data})
 * loadFailure: (data) => ({type: 'LOAD_FAILURE'})
 */

export const PodcastsTypes = Types;
export default Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  data: [],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data }),
});
