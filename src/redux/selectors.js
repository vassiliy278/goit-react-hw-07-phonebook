const getLoading = state => state.contacts.loading

const getFilter = state => state.contacts.filter

const getVisibleContacts = state => {
    const filter = getFilter(state)
    const {items} = state.contacts
    const normalizedFilter = filter.toLowerCase()
    return items.filter(e => e.name.toLowerCase().includes(normalizedFilter))
}

export default {
    getLoading,
    getFilter,
    getVisibleContacts
}
