import { combineReducers } from 'redux'
import photosReducer from './photosReducer'
import usersReducer from './usersReducer'

export const rootReducer = combineReducers({
    usersReducer: usersReducer,
    photosReducer: photosReducer
})
