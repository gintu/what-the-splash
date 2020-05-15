import {IMAGES} from '../constants'


const loadingReducer = (state=false,actions)=>{

  switch(actions.type){
    case IMAGES.LOAD : return true
    case IMAGES.LOAD_SUCCESS : return false
    case IMAGES.LOAD_FAIL : return false

    default:return false 
      
  }
}

export default loadingReducer