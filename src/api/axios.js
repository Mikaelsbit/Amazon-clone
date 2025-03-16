import axios from 'axios'


const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-uslq.onrender.com"
})

export {axiosInstance}