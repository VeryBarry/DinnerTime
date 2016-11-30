const Backbone = require('backbone');

const  UserModel  = require('./model-user.js')
const { WaitTimeModel, WaitTimeCollection } = require('./model-waitTime.js')
const STORE = require('./store.js')

const ACTIONS = {
   authenticateUser: function(userDataObj){
      console.log(userDataObj)
     let userMod = new UserModel()
     userMod.set(userDataObj)
     console.log(userMod)

    userMod.save().then(function(serverRes){
      console.log(serverRes)
      window.location.hash = "home"
    })
   },

  fetchWaitTimeCollection: function(queryObj){
     const waitTimeColl = new WaitTimeCollection()
     waitTimeColl.fetch().then(function(){
        console.log(waitTimeColl)
        STORE.setStore('currentWaitTimes', waitTimeColl.models )
     })

  },

  createNewWaitTime: function(newWaitTimeData){
     console.log(newWaitTimeData)
     const waitTimeMod = new WaitTimeModel()
     waitTimeMod.set(newWaitTimeData)
     return waitTimeMod.save().then(function(){
       window.location.hash = "home"
     })

  },


}

module.exports = ACTIONS
