import actions from './actions'
import axios from 'axios'

const addContact = (name, number) => dispatch => {
    dispatch(actions.addContactRequest());
    axios.post('http://localhost:2000/contacts', {name, number})
    .then(response => {
        dispatch(actions.addContactSuccess(response.data))
    })
    .catch(error => dispatch(actions.addContactError()))
}

const getContacts = () => dispatch => {
    dispatch(actions.getContactRequest())
    axios.get('http://localhost:2000/contacts')
    .then(response => dispatch(actions.getContactSuccess(response.data)))
    .catch(error => dispatch(actions.getContactError))
}

const removeContact = (id) => dispatch => {
    dispatch(actions.removeContactRequest())
    axios.delete(`http://localhost:2000/contacts/${id}`)
    .then(response => dispatch(actions.removeContactSuccess(id)))
    .catch(error => dispatch(actions.removeContactError))
}
export default {
    addContact,
    getContacts,
    removeContact
}