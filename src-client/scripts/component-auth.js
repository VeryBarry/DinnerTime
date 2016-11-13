const React = require('react')

const ACTIONS = require('./actions.js')

const AuthView = React.createClass({
   _handleUserAuth: function(evt){
      evt.preventDefault()

      let newUserData = {
         name: evt.target.name.value,
         password: evt.target.password.value
      }

      ACTIONS.authenticateUser(newUserData)
   },

   render: function(){
      return (

            <div className="login-container" onSubmit={this._handleUserAuth}>

               <div className="name-container row text-center">

                  <div className="col-md-6">
                      <h2><label>User </label></h2>
                  </div>

                  <div className="col-md-6">
                      <input className="form-control" type="text" name="name"/>
                  </div>

               </div>


               <div className="password-container row text-center">
                  <div className="col-md-6">
                     <h2><label>Password</label></h2>
                  </div>

                  <div className="col-md-6">
                     <input className="form-control" type="password" name="password"/>
                  </div>

               </div>

               <div className="button-container text-center">
                   <input type="submit" className="btn btn-primary" value="Login" / >
               </div>

            </div>

      )
   }
})



module.exports = AuthView
