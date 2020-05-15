import {select, put, takeEvery } from 'redux-saga/effects'
import {IMAGES} from '../redux/constants'
import {loadImages,setImages,setError} from '../redux/actions'


const getPage = state => state.nextPage
const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';


function* loadImageSaga(){

  const st = yield select(getPage)

  try{

    let res = yield fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=4&page=${st}`)


    let images = yield res.json()

    yield put(setImages(images))
    }
catch(error){
  yield put(setError(error.toString()))
}
}


function* imageSaga(){
  yield takeEvery(IMAGES.LOAD,loadImageSaga)
}


export default imageSaga



