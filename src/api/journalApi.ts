import axios from 'axios'


const journalBaseApi = axios.create({
    baseURL: 'https://vue-journal-a527e-default-rtdb.firebaseio.com'
})


export default journalBaseApi