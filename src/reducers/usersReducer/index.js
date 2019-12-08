import {
    SING_IN_SUCCES, SING_IN_FAILURE,
    SING_UP_SUCCES, SING_UP_FAILURE
} from '../../actionType'

import { toast } from 'react-toastify'

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
    user: {
      Login: "",
      Password: null,
      Id: null,
    },
    disabled: false,
    isFetching: false,
    singUpCodeStatus: Boolean,
    redirectStatus: Boolean,
    error: ""
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
  
      case SING_IN_SUCCES:
        console.log(action.payload.status)
        return { ...state, user: action.payload.userAnswer, redirectStatus: action.payload.status, isAccept: true }
        
      case SING_IN_FAILURE:
        toastError("Произошла ошибка пожалуйста попробуйте позже")
        return { ...state, error: action.payload.message }
      
      case SING_UP_SUCCES:
        console.log(action.payload.status)
        if(action.payload.status){
          toastSucces("Регистрация прошла успешна")
        }
        return { ...state, singUpCodeStatus: action.payload.status, isAccept: true, redirectStatus: Boolean }

      case SING_UP_FAILURE:
        toastError("Произошла ошибка пожалуйста попробуйте позже")
        return { ...state, error: action.payload.message }
    
      default:
        return state
    }
  }
  

export default usersReducer