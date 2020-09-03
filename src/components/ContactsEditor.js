import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import actions from '../redux/actions'
import contactOperations from '../redux/operations'
import '../style.css'
import propTypes from 'prop-types'
import operations from '../redux/operations';

class ContactsEditor extends Component {

    state = {
        name: '',
        number: '',
        double: false
    }

    handleChange = (name, value)=> {
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        const {name, number} = this.state
        const {itemsList, onAddContact} = this.props
        e.preventDefault()
        if(!itemsList.filter(e => e.name.includes(name)).length >= 1) {
            onAddContact(name, number)
            this.setState({name: '', number: ''})
        } else {
            this.setState({name: '', number: '', double: true})}
            setTimeout(() => {this.setState({double: false})}, 1000 )
    }

    render () {
        const {name, number, double} = this.state
        const {itemsList} = this.props
        
        return (
            <>
            <CSSTransition in={double} timeout={1000} unmountOnExit classNames="warn"><p className="warn">Problem invoked!</p></CSSTransition>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input 
                    onChange={(e) => this.handleChange(e.target.name, e.target.value)} 
                    placeholder="name"
                    value={name} 
                    name="name" 
                    type="text"
                    className="name">
                </input>
                <input onChange={(e) => this.handleChange(e.target.name, e.target.value)} 
                    placeholder="number"
                    value={number} 
                    name="number" 
                    type="text"
                    className="number">
                </input>
                <button className="button" type="submit">add</button>
            </form>
            </>
        )
    }
};
const mapStateToProps = (state, ownProps) => {
    return {
        itemsList: state.contacts.items
    }
}

const mapDispatchToProps = {
        onAddContact: operations.addContact
        }
export default connect(mapStateToProps, mapDispatchToProps)(ContactsEditor)

ContactsEditor.propTypes = {
    onAddContact: propTypes.func,
    itemsList: propTypes.array
}