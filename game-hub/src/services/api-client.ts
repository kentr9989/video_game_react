import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "9e70011f759749639d0dade1c6164a04"
    }
})