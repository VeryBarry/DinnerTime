const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');

const AuthView = require('./component-auth.js')
const HomeView = require('./component-home.js')
const NewWaitTimeView = require('./component-newWaitTime.js')

const AppRouter = Backbone.Router.extend({
  routes: {
    "" : "renderAuthView",
    "home" : "renderHomeView",
    "add" : "renderNewWaitTimeView"

  },

  renderHomeView: function(){
     ReactDOM.render(<HomeView/> ,document.querySelector('#app-container'))
  },

  renderAuthView: function(){
     ReactDOM.render(<AuthView/>, document.querySelector('#app-container'))
  },

  renderNewWaitTimeView: function(){
     ReactDOM.render(<NewWaitTimeView/>, document.querySelector('#app-container'))
  },

  initialize: function(){
     Backbone.history.start();
  }
})



new AppRouter()
