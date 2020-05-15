import {IMAGES} from '../constants'

console.log(IMAGES)


const errorReducer = (state=null,actions) =>{

  switch(actions.type){
     case IMAGES.LOAD_FAIL: return actions.error
    default: return null
  }
}

export default errorReducer