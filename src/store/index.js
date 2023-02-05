import {createStore} from 'vuex'

export default createStore({
    state: {
        user: {
            name: 'bilal',
            age: 122,
            email: 'bilaltoor786786@gmail.com'
        }
    },
    getters:{
    Getvalue(state){
        return state.user
    }
    }
})
