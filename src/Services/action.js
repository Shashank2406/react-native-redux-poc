/**
 *
 * Actions for Wellness.
 * @author Shashank Srivastava
 *
 *
 */

// import CONFIG from '../Config'
import {
  AUTO_SUGGESTION,
  WELLNESS_LISTING,
} from './constant'


export const wellnessAutosuggestion = (details) => (dispatch: any) => {
  dispatch({
    type:AUTO_SUGGESTION,
  })
}

export const getWellnessListing = (params) => (dispatch: any) => {
  dispatch({
    type:WELLNESS_LISTING,
  })
}


