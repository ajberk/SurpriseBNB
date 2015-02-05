SurpriseBNBApp.Collections.Comments = Backbone.Collection.extend({
  model: SurpriseBNBApp.Models.Comment,
  url: "/api/comments",

  getOrFetch: function (id) {
    var model = this.get(id);
    var that = this;
    if (!model) {
      model = new SurpriseBNBApp.Models.Comment({id: id})
      model.fetch({
        success: function() {
          that.add(model)
        }
      })
    }
    return model
  }

});
