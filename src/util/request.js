import axios from 'axios'

const request = axios.create({
  withCredentials: false,
  baseURL: 'http://lowcodeapi.dongxiweilai.com',
  timeout: 10000
})

request.interceptors.request.use(
  config => {
    config.headers = config.headers || {}
    config.headers['Content-Type']= "application/json;charset=UTF-8"
    // config.headers['Access-Control-Allow-Origin']= "https://app.maibozhineng.com"
    config.headers['Authorization']= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjEzMDAwMDAwMDAxMDEsIlRlbmFudElkIjoxMzAwMDAwMDAwMDAxLCJBY2NvdW50Ijoic3VwZXJhZG1pbiIsIlJlYWxOYW1lIjoi6LaF57qn566h55CG5ZGYIiwiQWNjb3VudFR5cGUiOjk5OSwiT3JnSWQiOjAsIk9yZ05hbWUiOm51bGwsIk9yZ1R5cGUiOm51bGwsImlhdCI6MTY5Nzc3MDYwMiwibmJmIjoxNjk3NzcwNjAyLCJleHAiOjE2OTgzNzU0MDIsImlzcyI6IkFkbWluLk5FVCIsImF1ZCI6IkFkbWluLk5FVCJ9.8zm42HutKXZXTj2unv5jxZn-xj4_XQMvJZTRJTvkQkY"
    config.params = {
      ...config.params
    };
      config.data = {
      ...config.data
        }
    return config
  },
  error => {
    return Promise.reject(new Error(error).message)
  }
)

request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(new Error(error).message)
  }
)

export default request