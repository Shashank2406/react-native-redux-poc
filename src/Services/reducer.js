/**
 *
 * Reducer for MyProfile
 * @author Anil Kumar
 *
 */

import {
    GET_FUNCTION,
    SET_FUNCTION,
  } from './constant'
    
  const initialState = {
    getFunction:'',
    setFunction:'',
  }
    
  export default function MyProfileReducer(state = initialState, action) {
    switch (action.type) {
      case GET_FUNCTION:
        return {
          ...state,
        }
      case SET_FUNCTION:
        return {
          ...state,
        }
      default:
        return state
    }
  }
    
    
    