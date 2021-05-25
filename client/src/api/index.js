import axios from 'axios'
import acios from 'axios'

const url ='https://localhost:5000/posts'

export const fetchPosts =()=> axios.get(url)
