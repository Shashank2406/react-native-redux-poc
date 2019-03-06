/**
 *
 * Reducer for MyProfile
 * @author Anil Kumar
 *
 */

import {
    AUTO_SUGGESTION,
    WELLNESS_LISTING,
  } from './constant'
    
  const initialState = {
    suggestion:'',
    wellnessListingReply:'',
  }
    
  export default function MyProfileReducer(state = initialState, action) {
    switch (action.type) {
      case AUTO_SUGGESTION:
        return {
          ...state,
          suggestion: action.wellnessDetailsReply
        }
      case WELLNESS_LISTING:
        return {
          ...state,
          wellnessListingReply: action.wellnessListingReply
        }
      default:
        return state
    }
  }
    
    
    