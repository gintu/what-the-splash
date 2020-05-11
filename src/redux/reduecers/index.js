import {combineReducers} from 'redux'

import errorReducer from './errorReducer'
import imageReducer from './imageReducer'
import loadingReducer from './loadingReducer'

cost rootReducer = combineReucers({error:errorReducer,images:imageReducer,isLoading:loadingReducer})

export default rootReducer