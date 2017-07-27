import * as types from './actionTypes';

const clearError = {
  isError: false,
  statusText: '',
  status: ''
}

const initialState = {
  info: {},
  times: [],
  images: [],
  isFetching: false,
  error: clearError
};

export default function restaurantHandler( state = initialState, action ) {
  switch( action.type ) {
    case types.RESTAURANT_SUCCESS:
      return Object.assign( {}, state, {
        info: action.response,
        times: action.times,
        images: action.images || [],
        isFetching: false,
        error: clearError
      })
    case types.RESTAURANT_UPDATE_REQUEST:
      return Object.assign( {}, state, {
        isFetching: true
      })
    case types.RESTAURANT_FAIL:
      return Object.assign( {}, state, {
        error: { isError: true, statusText: action.statusText, status: action.status },
        isFetching: false,
      })
    case types.RESTAURANT_UPDATE_SUCCESS:
      return Object.assign( {}, state, {
        response: action.response,
        isFetching: false,
        error: clearError,
      })
    case types.RESTAURANT_HOURS_UPDATE_SUCCESS:
      return Object.assign( {}, state, {
        times: [...state.times, action.hours]
      })
    case types.RESTAURANT_HOURS_DELETE:
      return Object.assign( {}, state, {
        times: [
          ...state.times.slice(0, action.index),
          ...state.times.slice(action.index + 1)
        ]
      })
    case types.IMAGE_UPLOAD_SUCCESS:
      return Object.assign( {}, state, {
        images: [...state.images, action.image]
      })

    case types.RESTAURANT_IMAGE_DELETE:
      return Object.assign( {}, state, {
        images: [
          ...state.images.slice(0, action.index),
          ...state.images.slice(action.index + 1)
        ]
      })
    default:
      return state;
  }
}
