SurpriseBNBApp.Views.BookingShow = Backbone.CompositeView.extend({
  template: JST["bookings/show"],

  initialize: function(options) {
  },

  render: function() {
    var content = this.template({
      listings: this.collection
    })
    this.$el.html(content)
    return this;
  },
});
