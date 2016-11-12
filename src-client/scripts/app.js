const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');

const AuthView = require('./component-auth.js')
const HomeView = require('./component-home.js')

const AppRouter = Backbone.Router.extend({
  routes: {
    "" : "renderHomeView",
    "login" : "renderAuthView"

  },

  renderHomeView: function(){
     ReactDOM.render(<Test/> ,document.querySelector('#app-container'))
  },

  renderAuthView: function(){
     ReactDOM.render(<AuthView/>, document.querySelector('#app-container'))
  },

  initialize: function(){
     Backbone.history.start();
  }
})



new AppRouter()
