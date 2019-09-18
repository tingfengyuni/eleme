import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        info:'',
        user:[],
        arr:'123',
    },
    mutations:{
        faA(state,value){
            state.arr=value
        },
        add(state,value){
            console.log(value)
        },
        faB(state,val){
            state.user=val
        }
    },
    plugins: [createPersistedState({
        storage:window.localStorage,
        reducer(value){
            return{
                user:value.user
            }
        }
    })]
});
 
export default store;