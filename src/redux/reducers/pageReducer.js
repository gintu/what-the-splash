import {IMAGES} from '../constants'


let initialState = 1

const pageReducer=(state =initialState,actions)=>{
  switch(actions.type){
    case IMAGES.LOAD_SUCCESS: return state + 1;
    default: return state
  }
}

export default pageReducer