const React = require('react')

const ACTIONS = require('./actions.js')

const HomeView = React.createClass({
   render: function(){
      return (
         <div>

            <form className="form-group grid-container" onSubmit={this._handleUserAuth}>

               <div className="form-field sm-12-of-12 md-12-of-12">
                   <h3><label>User </label></h3>
                   <input type="text" name="name"/>
               </div>

               <div className="form-field sm-12-of-12 md-12-of-12">
                   <h3><label>Password </label></h3>
                   <input type="password" name="password"/>
               </div>

               <div className="form-field sm-12-of-12 md-12-of-12 txt-center">
                   <input type="submit" className="btn primary" value="+" / >
               </div>

            </form>
         </div>
      )
   }
})



module.exports = HomeView
