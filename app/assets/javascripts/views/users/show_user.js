SurpriseBNBApp.Views.UserShow = Backbone.CompositeView.extend({
  template: JST["users/show"],

  initialize: function(options) {
    this.listenTo(SurpriseBNBApp.Bookings, "all", this.render);
  },

  render: function() {
    var content = this.template({
    })
    this.$el.html(content)
    return this;
  },
});
