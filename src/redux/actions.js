import {v4} from 'uuid'
import {createAction} from '@reduxjs/toolkit'
import actionTypes from './actionTypes'

const addContactRequest = createAction(actionTypes.ADD_REQUEST);
const addContactSuccess = createAction(actionTypes.ADD_SUCCESS);
const addContactError = createAction(actionTypes.ADD_ERROR);

const removeContactRequest = createAction(actionTypes.REMOVE_REQUEST);
const removeContactSuccess = createAction(actionTypes.REMOVE_SUCCESS);
const removeContactError = createAction(actionTypes.REMOVE_ERROR);

const getContactRequest = createAction(actionTypes.GET_REQUEST);
const getContactSuccess = createAction(actionTypes.GET_SUCCESS);
const getContactError = createAction(actionTypes.GET_ERROR);

const addContact = createAction(actionTypes.ADD, (name, number) => ({
    payload: {
        items: {
            name,
            number
        }
    }
}))

const removeContact = createAction(actionTypes.REMOVE, id => ({
    payload: {
        id
    }
}))

const findContact = createAction(actionTypes.FIND_CONTACT, filter => ({
    payload: {
        filter: filter
    }
}))

export default {
    addContactRequest,
    addContactSuccess,
    addContactError,
    getContactRequest,
    getContactSuccess,
    getContactError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError,
    // addContact,
    // removeContact,
    findContact
}