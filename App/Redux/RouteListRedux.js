import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  routeRequest: ['rValue'],
  routeSuccess: ['routeList'],
  routeFailure: null
})

export const RouteListTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  routeList: []
})

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state, { rValue }) =>
  state.merge({ fetching: true, rValue })

// successful avatar lookup
export const success = (state, action) => {
  const { routeList } = action
  return state.merge({ fetching: false, error: null, routeList: routeList })
}

// failed to get the avatar
export const failure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ROUTE_REQUEST]: request,
  [Types.ROUTE_SUCCESS]: success,
  [Types.ROUTE_FAILURE]: failure
})
