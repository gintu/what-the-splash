import {takeEvery,put,call,fork,select} from'redux-saga/effects'
import {IMAGES,STATS} from '../redux/constants'


function* fetchStatSaga(){
  let {images} = yield select()
  console.log(images)
}


function* statWatcherSaga(){

  yield takeEvery(IMAGES.LOAD_SUCCESS,fetchStatSaga)
}


export default statWatcherSaga