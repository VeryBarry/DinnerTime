const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');

// const AuthView = require('./component-auth.js')
// const HomeView = require('./component-home.js')
// const NewWaitTimeView = require('./component-newWaitTime.js')

const AppViewController = require('./component-viewcontroller.js')

const AppRouter = Backbone.Router.extend({
  routes: {
    "home" : "renderHomeView",
    "add" : "renderNewWaitTimeView",
    "" : "renderAuthView",


  },

  renderHomeView: function(){
     ReactDOM.render(<AppViewController routedFrom="HomeView"/> ,document.querySelector('#app-container'))
  },

  renderAuthView: function(){
     ReactDOM.render(<AppViewController routedFrom="AuthView"/>, document.querySelector('#app-container'))
  },

  renderNewWaitTimeView: function(){
     ReactDOM.render(<AppViewController routedFrom="NewWaitTimeView"/>, document.querySelector('#app-container'))
  },

  initialize: function(){
     Backbone.history.start();
  }
})



new AppRouter()
