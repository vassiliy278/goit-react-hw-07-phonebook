import React from 'react';
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import actions from '../redux/actions'
import '../style.css'
import selectors from '../redux/selectors'
import propTypes from 'prop-types'

function Filter({value, findByName, arrLength}) {
    console.log(typeof value)
    return (
        <CSSTransition in={arrLength > 1} timeout={500} unmountOnExit classNames="filter">
            <input
            className="name findElement"
                type="text"
                value={value}
                placeholder="find"
                onChange={e => findByName(e.target.value)}>
            </input>
        </CSSTransition>
    )
}
const mapStateToProps = (state) => {
    return {
        value: selectors.getFilter(state),
        arrLength: state.contacts.items.length
    }
}
const mapDispatchToProps = {
    findByName: actions.findContact
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

Filter.propTypes = {
    value: propTypes.string,
    findByName: propTypes.func,
    arrLength: propTypes.number
}