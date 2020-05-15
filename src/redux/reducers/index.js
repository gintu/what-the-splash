import {combineReducers} from 'redux'

import errorReducer from './errorReducer'
import imageReducer from './imageReducer'
import loadingReducer from './loadingReducer'
import pageReducer from './pageReducer'
import statsReducer from './statsReducer'

const rootReducer = combineReducers({error:errorReducer,
images:imageReducer,
isLoading:loadingReducer,
nextPage:pageReducer,
imageStats:statsReducer})

export default rootReducer