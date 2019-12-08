import {
  GET_PHOTOS_SUCCES, GET_PHOTOS_FAILURE,
  ADD_PHOTO_SUCCES, ADD_PHOTO_FAILURE,
} from '../../actionType'

import { toast } from 'react-toastify'

const reloadPage = () => {
  setTimeout(window.location.reload(), 6000)
}

const toastSucces = (text) => {
  toast.success(text, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
}

const toastError = (text) => {
  toast.error(text , {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });  
}

const initialState = {
    images: [],
    isFetching: false,
    status: Boolean,
    error: ""
}

function photosReducer(state = initialState, action) {
    switch (action.type) {
  
      case GET_PHOTOS_SUCCES:
        return { ...state, images: action.payload, isFetching: true, status: Boolean } 
      case GET_PHOTOS_FAILURE:
          toastError("Произошла ошибка пожалуйста попробуйте позже")
        return { ...state, error: action.payload.message, isFetching: false, status: false }

      case ADD_PHOTO_SUCCES:
          toastSucces("Вы успешно добавили фото")
          reloadPage()
        return { ...state, status: action.payload }
      case ADD_PHOTO_FAILURE:
          toastError("Произошла ошибка пожалуйста попробуйте позже")
        return { ...state, error: action.payload.message, status: action.payload }

      default:
        return state
    }
  }
  

export default photosReducer