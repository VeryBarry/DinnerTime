const React = require('react')

const ACTIONS = require('./actions.js')

const NewWaitTimeView = React.createClass({
  getInitialState: function() {
      return {
          add: []
      };
    },
   _handleWaitTimeSubmit: function(evt){
      evt.preventDefault()

      let newWaitTimeData = {
         restaurantName: evt.target.restaurantName.value,
         waitTime: evt.target.waitTime.value,
         barSeating: evt.target.barSeating.value,
         // ADD TIME
         // submitTime: this._timeStamp,
         rating: evt.target.rating.value
      }

      ACTIONS.createNewWaitTime(newWaitTimeData)
   },
   _handleClick: function(){
      window.location.hash = "home"
   },

   render: function(){
      return (
         <div className="newWaitTimeView-container">

            <div className="header-container text-center">
               <h1>Add a Wait Time</h1>
            </div>

            <div className="newWaitTime-container" onSubmit={this._handleWaitTimeSubmit}>

               <div className="row text-center">

                  <div className="col-md-6">
                      <h2><label>Restaurant Name:</label></h2>
                  </div>

                  <div className="col-md-6">
                      <input className="form-control" type="text" name="restaurantName"/>
                  </div>

               </div>

               <div className="row text-center">

                  <div className="col-md-6">
                      <h2><label>Wait Time in Minutes:</label></h2>
                  </div>

                  <div className="col-md-6">
                      <input className="form-control" type="text" name="waitTime"/>
                  </div>

               </div>

               <div className="row text-center">

                  <div className="col-md-6">
                      <h2><label>Bar Seating?</label></h2>
                  </div>

                  <div className="col-md-6">
                      <input className="form-control" type="text" name="barSeating"/>
                  </div>

               </div>

               <div className="row text-center">

                  <div className="col-md-6">
                      <h2><label>Rating:</label></h2>
                  </div>

                  <div className="col-md-6">
                      <input className="form-control" type="text" name="rating"/>
                  </div>

               </div>

               <div className="button-container text-center">
                     <input type="submit" onClick={this._handleClick} className="btn btn-primary" value="Submit" />
               </div>

            </div>

         </div>
      )
   }
})

// ReactDOM.render(<HomeView/> ,document.querySelector('#app-container'))

module.exports = NewWaitTimeView
