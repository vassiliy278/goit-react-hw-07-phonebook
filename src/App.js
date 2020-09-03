import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import ContactsEditor from './components/ContactsEditor'
import ContactsList from './components/ContactsList'
import Filter from './components/Filter'
import './style.css'
import operations from './redux/operations'
import selectors from './redux/selectors'

  

class App extends Component  {
  componentDidMount() {
    this.props.onGetContacts()

  }
    render(){
    return (
      <div className="wrapper">
      <CSSTransition in={true} timeout={1000} classNames="title" appear={true}>
        <h1>Phone Book</h1>
      </CSSTransition>
      <CSSTransition in={true} timeout={1000} classNames="title" appear={true}>
      <ContactsEditor/>
      </CSSTransition>
      <Filter/>
      <ContactsList/>
      {this.props.isLoading && <h3>Loading...</h3>}
      </div>
    )
    }
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: selectors.getLoading(state)
  }
}

const mapDispatchToProps = {
  onGetContacts: operations.getContacts
}




export default connect(mapStateToProps,mapDispatchToProps)(App)