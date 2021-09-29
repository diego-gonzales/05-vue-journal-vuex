import { createStore } from 'vuex';
import journalStore from '@/modules/daybook/store/journal/index' // index is optional

const store = createStore({
    modules: {
        journalStore
    }
})


export default store