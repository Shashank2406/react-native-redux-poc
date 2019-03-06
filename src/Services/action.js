/**
 *
 * Actions for Wellness.
 * @author Shashank Srivastava
 *
 *
 */

// import CONFIG from '../Config'
import {
  GET_FUNCTION,
  SET_FUNCTION,
} from './constant'


export const getFunction = (details) => (dispatch: any) => {
  dispatch({
    type:GET_FUNCTION,
  })
}

export const setFunction = (params) => (dispatch: any) => {
  dispatch({
    type:SET_FUNCTION,
  })
}


