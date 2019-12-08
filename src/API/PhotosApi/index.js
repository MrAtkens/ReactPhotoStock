import axios from 'axios'
axios.defaults.withCredentials = true 

const URL = 'localhost:1801'

//GET
export const fetchPhotosApi = async () => {
    return await axios.get(`http://${URL}/api/Photos/GetPhotos`).then(response => {
      return response.data;
    })
}

//POST
export const addPhotosApi = async (photo, fileName, description, userName) => {
  const formData = new FormData();
  formData.append('file',photo)
  return await axios.post(`http://${URL}/api/Photos/UploadFile`, formData, {headers: {
    'Description': description,
    'Name': fileName,
    'UserName': userName,
    'content-type': 'multipart/form-data'
  }}).then(response => {
    return response.data;
  });
}