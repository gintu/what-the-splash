import {IMAGES} from '../constants'


const errorReducer = (state=null,actions) =>{

  switch(actions.type){
    case IMAGES.LOAD_FAIL: return action.error
    default:return null
  }
}

export default errorReducer