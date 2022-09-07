import {configureStore, createSlice} from '@reduxjs/toolkit'

//AUthentication state management
const initialAuth = {auth : true}
const isAuth = createSlice({
    name : 'authentication',
    initialState : initialAuth,
    reducers : {
        login(state){
            state.auth = false;
        },
        logout(state){
            state.auth = true;
        }

    }
})

//Counter State Management
const initialCounter = {count : 0, showCount : true}

const counterSlice = createSlice({
    name : 'counter',
    initialState: initialCounter,
    reducers :{
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        increase(state,action){
            state.count = state.count + action.payload
        },
        reset(state){
            state.count = 0
        },
        toggle(state){
            state.showCount = !state.showCount
        }
    }
})


//Store required reducer function
const the_store = configureStore({
    reducer : {counter: counterSlice.reducer , auth : isAuth.reducer}
})

export const counterActions = counterSlice.actions

export const authActions = isAuth.actions

export default the_store;
