SurpriseBNBApp.Collections.Listings = Backbone.Collection.extend({
  model: SurpriseBNBApp.Models.Listing,
  url: "/api/listings",

  getOrFetch: function (id) {
    var model = this.get(id);
    var that = this;
    if (!model) {
      model = new SurpriseBNBApp.Models.Listing({id: id})
      model.fetch({
        success: function() {
          that.add(model)
        }
      })
    }
    return model
  }

});
