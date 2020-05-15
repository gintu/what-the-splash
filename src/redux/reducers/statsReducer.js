import {STATS} from '../constants'
import {loadStats,setStats,setStatsError} from '../actions'


const statsReducer = (state={},actions) => {

  switch(actions.type){
    case STATS.LOAD: return {
      ...state,
      [actions.id]:{
        isLoading:true,
        downloads:null,
        error:false
      }
    }
    case STATS.LOAD_SUCCESS: return {
      ...state,
      [actions.id]:{
        isLoading:false,
        downloads:actions.downloads,
        error:false
      }
    }
    case STATS.LOAD_FAIL: return {
      ...state,
      [actions.id]:{
        isLoading:false,
        downloads:null,
        error:true
      }
      

    }
    default: return state


  }

}

export default statsReducer