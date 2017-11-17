import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import RouteListActions from '../Redux/RouteListRedux'


export function * getRouteData (api, action) {
  const { rValue } = action
  const response = yield call(api.getRouteList, rValue)

  if (response.ok) {
    yield put(RouteListActions.routeSuccess(response.data))
  } else {
    yield put(RouteListActions.routeFailure())
  }
}
