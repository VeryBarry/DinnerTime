const React = require('react')
const STORE = require('./store.js')
const ACTIONS = require('./actions.js')

const HomeView = require('./component-home.js')
const AuthView = require('./component-auth.js')
const NewWaitTimeView = require('./component-newWaitTime.js')

const AppViewController = React.createClass({
  getInitialState: function(){
    STORE.setStore('currentWaitTimes', [])
    let startingState = STORE.getStoreData()
    return startingState
  },

  componentWillMount: function(){
    let self = this
    STORE.onChange(function(){
        let updateState = STORE.getStoreData()
        self.setState(updateState)
    })
  },

  render: function(){
    switch(this.props.routedFrom){
      case "HomeView":
         return <HomeView currentWaitTimes={this.state.currentWaitTimes}/>
         break;

      case "NewWaitTimeView":
         return <NewWaitTimeView currentWaitTimes={this.state.currentWaitTimes} />
         break;

      case "AuthView":
         return <AuthView/>
         break;

      default:
         return <div><h1>Yolo!!</h1></div>
    }
  }

})

module.exports = AppViewController
