SurpriseBNBApp.Collections.Images = Backbone.Collection.extend({
  model: SurpriseBNBApp.Models.Image,
  url: "/api/comments",

  getOrFetch: function (id) {
    var model = this.get(id);
    var that = this;
    if (!model) {
      model = new SurpriseBNBApp.Models.Image({id: id})
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
