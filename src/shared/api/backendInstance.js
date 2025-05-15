import axios from "axios";

const backendInstance = axios.create({
    baseURL: 'https://pet-shop-backend-1-drkl.onrender.com'
})

export default backendInstance;