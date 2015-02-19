SurpriseBNBApp.Views.UserShow = Backbone.CompositeView.extend({
  template: JST["users/show"],

  initialize: function(options) {
    this.listenTo(SurpriseBNBApp.Bookings, "sync", this.render);
    this.listenTo(SurpriseBNBApp.Bookings, "add", this.addContent);
    SurpriseBNBApp.Bookings.each(this.addContent.bind(this));
  },

  render: function() {
    var content = this.template();
    this.$el.html(content)
    this.renderContent();
    this.attachSubviews();
    return this;
  },

  addContent: function (booking) {
    var view = new SurpriseBNBApp.Views.BookingShow({
      model: booking
    });
    this.addSubview('.trips', view);
  },

  renderContent: function () {
  },
});
