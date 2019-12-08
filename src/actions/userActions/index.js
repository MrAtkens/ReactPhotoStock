import { singInApi, singUpApi} from '../../API'
import { SING_IN_START, SING_IN_SUCCES, SING_IN_FAILURE,
SING_UP_START, SING_UP_SUCCES, SING_UP_FAILURE} from '../../actionType'




export const singIn = (login, password) => async dispatch => {
  dispatch({type: SING_IN_START})

try {
  const data = await singInApi(login, password)
  console.log(data)

  dispatch({
    type: SING_IN_SUCCES,
    payload: data
  })
} catch (err) {
  dispatch({
    type: SING_IN_FAILURE,
    payload: err,
    error: true
  })
}
}

export const singUp = (login, password) => async dispatch => {
  dispatch({type: SING_UP_START})

try {
  const data = await singUpApi(login, password)
  console.log(data)

  dispatch({
    type: SING_UP_SUCCES,
    payload: data
  })
} catch (err) {
  dispatch({
    type: SING_UP_FAILURE,
    payload: err,
    error: true
  })
}
}