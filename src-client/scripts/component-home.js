const React = require('react')

const ACTIONS = require('./actions.js')

const HomeView = React.createClass({
  getInitialState: function() {
      return {
          restaurants: []
      };
    },
   componentWillMount: function(){
         ACTIONS.fetchWaitTimeCollection()
   },

   _handleClick: function(){
      window.location.hash = "add"
   },

   render: function(){
      return (
         <div className="home-container">

            <div className="header-container">
            <h1><ul>Dinner Time</ul></h1>

               <h4>Restaurant Wait Times</h4>
            </div>

            <div className="content-holder">

            </div>

            <div className="add-new">
               <div onClick={this._handleClick} className="btn btn-success">Add New Wait Time</div>
            </div>

         </div>


      )
   }
})



module.exports = HomeView
