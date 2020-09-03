import {combineReducers} from 'redux'
import {createReducer} from '@reduxjs/toolkit'
import actions from './actions'

const addContact = (state, action) => { return [...state, action.payload]}
const removeContact = (state, action) => {return state.filter(e => e.id !== action.payload.id)}
const filterContact = (state, action) => {return action.payload.filter}

const items = createReducer([], {
    [actions.addContactSuccess]: addContact,
    [actions.getContactSuccess]: (state, action) => action.payload,
    [actions.removeContactSuccess]: removeContact
})

const filter = createReducer('', {
    [actions.findContact]: filterContact
})

const loading = createReducer(false, {
    [actions.addContactRequest]: (state, action) => true,
    [actions.addContactSuccess]: () => false,
    [actions.addContactError]: () => false,
    [actions.getContactRequest] : () => true,
    [actions.getContactSuccess] : () => false,
    [actions.getContactError] : () => false,
    [actions.removeContactRequest] : () => true,
    [actions.removeContactSuccess] : () => false,
    [actions.removeContactError] : () => false
})

export default combineReducers ({
    items,
    filter,
    loading
})