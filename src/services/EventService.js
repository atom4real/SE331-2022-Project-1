import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPatients(perPage, page) {
    return apiClient.get('/patient?_limit=' + perPage + '&_page=' + page)
  },
  getPatient(id) {
    return apiClient.get('/patient/' + id)
  }
}
