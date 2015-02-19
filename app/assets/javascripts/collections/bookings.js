SurpriseBNBApp.Collections.Bookings = Backbone.Collection.extend({
  model: SurpriseBNBApp.Models.Booking,
  
  url: "/api/bookings",

  getOrFetch: function (id) {
    var model = this.get(id);
    var that = this;
    if (!model) {
      model = new SurpriseBNBApp.Models.Booking({id: id})
      model.fetch({
        success: function() {
          that.add(model)
        }
      })
    } else {
      model.fetch();
    }
    return model
  }

});


SurpriseBNBApp.Bookings = new SurpriseBNBApp.Collections.Bookings()
SurpriseBNBApp.Bookings.fetch()
