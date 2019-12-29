import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 43d31976b8413bb4c46ee851a30fef3e205701d470cfc8efe188771efe71625e'
  }
})