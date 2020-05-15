import imageSaga from './imageSaga'
import statSaga from './statSaga'
import {all} from 'redux-saga/effects'


export default function* rootSaga() {
  yield all([
    imageSaga(),
    statSaga()
  ])
  // code after all-effect
}
