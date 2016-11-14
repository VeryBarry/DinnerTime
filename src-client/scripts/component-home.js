const React = require('react')
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')

const RestList= React.createClass({
   render: function(){
      let self = this
      console.log(this.props)

      return (

         <div className="waitTimeEl row">

            <div className="restaurant-name col-md-4">
               <div>{this.props.restObj.get("restaurantName")}</div>
            </div>
            <div className="wait-time col-md-4">
               <div>{this.props.restObj.get("waitTime")} min</div>
            </div>
            <div className="submit-time col-md-4">
               <div>{this.props.restObj.get("submitTime")}</div>
            </div>

         </div>
      )
   }
})

const HomeView = React.createClass({

   componentWillMount: function(){
         ACTIONS.fetchWaitTimeCollection()

   },

   _handleClick: function(){
      window.location.hash = "add"
   },

   render: function(){
      console.log(this.props.currentWaitTimes)

      return (
         <div className="home-container text-center">

            <div className="header-container">
            <h1><ul>Dinner Time™</ul></h1>

               <h3>Restaurant Wait Times</h3>
            </div>

            <div className="content-holder">
               {this.props.currentWaitTimes.map(function(obj, i){return <RestList key={i} restObj={obj} /> })}
            </div>

            <div className="add-new">
               <div onClick={this._handleClick} className="btn btn-success">Add New Wait Time</div>
            </div>

         </div>


      )
   }
})



module.exports = HomeView
