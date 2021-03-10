import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const login = createReducer(
    {loginStatus: ''},
    {
        SET_LOGIN: (state, action) => {
            state.loginStatus = action.payload            
        }
    }
)

export default combineReducers ({
    login: login
})