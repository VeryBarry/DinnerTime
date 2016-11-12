const Backbone = require('backbone');

const  UserModel  = require('./model-user.js')
const { WaitTimeModel, WaitTimeCollection } = require('UserModel')

const ACTIONS = {
   authenticateUser: function(userDataObj){
      console.log(userDataObj)
     let userMod = new UserModel()
     userMod.set(userDataObj)
     console.log(userMod)

    //FIX THE /users post route
    // (Nullpointer exception)
    userMod.save().then(function(serverRes){
      console.log(serverRes)
      window.location.hash = ""
    })
   },

  fetchWaitTimeCollection: function(queryObj){
     const waitTimeColl = new WaitTimeCollection()
     waitTimeColl.fetch().then(function(){
       STORE.setStore('currentWaitTimes', waitTimeColl.models )
     })

  },

  createNewWaitTime: function(newPostData){
     const waitTimeMod = new WaitTimeModel()
     waitTimeMod.set(newTodoData)
     return waitTimeMod.save().then(function(){
       window.location.hash = "waitTimes"
     })

  },


}

module.exports = ACTIONS
