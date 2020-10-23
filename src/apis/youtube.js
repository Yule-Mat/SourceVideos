import axios from 'axios';

const KEY = 'AIzaSyB41w8Ipjbtaqj3f5qSqLYfo1wStAueDko';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
