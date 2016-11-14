const React = require('react')

const ACTIONS = require('./actions.js')

const AuthView = React.createClass({
  getInitialState: function() {
      return {
          items: []
      };
    },
   _handleUserAuth: function(evt){
      evt.preventDefault()

      let newUserData = {
         name: evt.target.name.value,
         password: evt.target.password.value
      }

      ACTIONS.authenticateUser(newUserData)
   },
   _handleClick: function(){
      window.location.hash = "home"
   },

   render: function(){
      return (

         <form className="form-group login-container" onSubmit={this._handleUserAuth}>

            <div className="form-field name-container row text-center">

               <div className="col-md-6">
                   <h2><label>User :</label></h2>
               </div>

               <div className="col-md-6">
                   <input type="text" name="name"/>
               </div>

            </div>


            <div className="form-field password-container row text-center">
               <div className="col-md-6">
                  <h2><label>Password :</label></h2>
               </div>

               <div className="col-md-6">
                  <input type="password" name="password"/>
               </div>

            </div>

            <div className="button-container text-center">
                <input type="submit" onClick={this._handleClick} className="btn btn-primary" value="Login" />
            </div>

         </form>

      )
   }
})



module.exports = AuthView
