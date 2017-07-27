import * as types from './actionTypes';
import data from './data';

export function getRestaurantData(){
  return {
    type: types.RESTAURANT_SUCCESS,
    response: data,
    times: []
  }
}

export function updateRestaurant(details) {
  return {
    type: types.RESTAURANT_UPDATE_SUCCESS,
    response: details
  }
}

export function addPhoto(imgInfo){
  return {
    type: types.IMAGE_UPLOAD_SUCCESS,
    image: imgInfo
  }
}

export function deletePhoto(index){
  return {
    type: types.RESTAURANT_IMAGE_DELETE,
    index
  }
}

export function addRestaurantHours(details){
  return {
    type: types.RESTAURANT_HOURS_UPDATE_SUCCESS,
    hours: details
  }
}

export function deleteRestaurantHours(index){
  return {
    type: types.RESTAURANT_HOURS_DELETE,
    index
  }
}

export function requestRestaurantUpdate() {
  return {
    type: types.RESTAURANT_UPDATE_REQUEST
  }
}


export function restaurantFail(response) {
  return {
    type: types.RESTAURANT_FAIL,
    status: response.status,
    statusText: response.statusText
  }
}






/*
various examples of hitting an api


export function restaurantUpdateSuccess(response){
  return {
    type: types.RESTAURANT_UPDATE_SUCCESS,
    response: response
  }
}


export function updateRestaurant(location, details){
  return (dispatch) => {
    dispatch(requestRestaurantUpdate());
    return Api.updateRestaurant(location, details)
      .then(
        (response) => {
          if(response.status >= 200 && response.status < 300){
            return response.json();
          } else {
            dispatch(restaurantFail(response))
          }
        },
        error => console.log('could not connect.', error)
      )
      .then(json =>
        setTimeout( () => dispatch(restaurantUpdateSuccess(json)), 500 )
      )
  }
}

export function addRestaurantPhoto(location, imgInfo){
  return function(dispatch){
    return Api.saveRestaurantPhoto(location, imgInfo).then(response => {
      dispatch(uploadPhotoSuccess(response));
    }).catch(error => {
      console.log('Image upload error', error);
    });
  };
}

export function addRestaurantHours(location, details){
  return function(dispatch){
    return Api.saveRestaurantHours(location, details).then(response => {
      dispatch(newHoursSuccess(response));
    }).catch(error => {
      console.log('Hours upload error', error);
    });
  };
}*/
