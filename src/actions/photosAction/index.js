import { GET_PHOTOS_START, GET_PHOTOS_SUCCES, GET_PHOTOS_FAILURE, 
ADD_PHOTO_START, ADD_PHOTO_SUCCES, ADD_PHOTO_FAILURE,
} from '../../actionType'

import { fetchPhotosApi, addPhotosApi } from '../../API'


export const fetchPhotos = () => async dispatch => {
  dispatch({type: GET_PHOTOS_START})

try {
  const data = await fetchPhotosApi()
  console.log(data)

  dispatch({
    type: GET_PHOTOS_SUCCES,
    payload: data
  })
} catch (err) {
  dispatch({
    type: GET_PHOTOS_FAILURE,
    payload: err,
    error: true
  })
}
}

export const addPhoto = (image, fileName, description, userName) => async dispatch => {
  dispatch({type: ADD_PHOTO_START})

try {
  const data = await addPhotosApi(image, fileName, description, userName)
  console.log(data)

  dispatch({
    type: ADD_PHOTO_SUCCES,
    payload: data
  })
} catch (err) {
  dispatch({
    type: ADD_PHOTO_FAILURE,
    payload: err,
    error: true
  })
}
}