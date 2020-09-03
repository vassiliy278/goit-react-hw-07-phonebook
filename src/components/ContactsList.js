import React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {connect} from 'react-redux'
import operations from '../redux/operations'
import selectors from '../redux/selectors'
import propTypes from 'prop-types'
import '../style.css'

const ContactsList = ({contactsss, removeItem}) => {
    return(
        <TransitionGroup component="ul">
            {contactsss.map(({id, name, number}) => (
                <CSSTransition key={id} in={true}  timeout={500} classNames="listItem" className="listElement">
                <li key={id} >
                    <span className="name">{name}</span><span className="number">{number}</span>
                    <button className="button" onClick={() => removeItem(id)}>remove</button>
                </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}

const mapStateToProps = state => ({
    contactsss: selectors.getVisibleContacts(state)
})

const mapDispatchToProps = {
    removeItem: operations.removeContact,
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)

ContactsList.propTypes = {
    contactsss: propTypes.array,
    removeItem: propTypes.func   
}