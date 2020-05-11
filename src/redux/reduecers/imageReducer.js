import {IMAGES} from '../constants'

const imageReducer=(state=[],actions)=>{

  if(actions.type === IMAGES.LOAD_SUCCESS){
    return [...state,...actions.images];
  }
  return state
}

export default imageReducer