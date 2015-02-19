SurpriseBNBApp.Views.UserShow = Backbone.CompositeView.extend({
  template: JST["users/show"],

  initialize: function(options) {
    this.listenTo(SurpriseBNBApp.Bookings, "all", this.renderContent);
  },

  render: function() {
    var content = this.template()
    this.$el.html(content)
    this.renderContent()
    return this;
  },

  addContent: function (booking) {
    var view = new SurpriseBNBApp.Views.BookingShow({
      model: booking
    });
    this.addSubview('.trips', view);
  },

  renderContent: function () {
    SurpriseBNBApp.Bookings.each(this.addContent.bind(this));
  },
});
