const Backbone = require('backbone')

const WaitTimeModel = Backbone.Model.extend({
   url: "/restaurants",

   initialize: function(){

   }
})

const WaitTimeCollection = Backbone.Collection.extend({
   model: WaitTimeModel,
   url: "/restaurants",

   initialize: function(){

   }
})


module.exports = {
   WaitTimeModel,
   WaitTimeCollection
}
