import axios from 'axios'
axios.defaults.withCredentials = true;

const URL = 'localhost:1801'

export const singInApi = async (userLogin, userPassword) => {
  return await axios.post(`http://${URL}/api/users/singIn`, {
    Login: userLogin,
    Password: userPassword
  }).then(response => {
    return response.data
  })
}

export const singUpApi = async (userLogin, userPassword) => {
  return await axios.post(`http://${URL}/api/users/singUp`, {
    Login: userLogin,
    Password: userPassword
  }).then(response => {
      return response.data
    }) 
}  