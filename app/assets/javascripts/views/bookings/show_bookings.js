SurpriseBNBApp.Views.BookingShow = Backbone.CompositeView.extend({
  template: JST["bookings/show"],

  initialize: function(options) {
    // this.listenTo(this.model.listing().images(), 'add', this.addImage)
  },

  render: function() {
    var content = this.template({
      booking: this.model
    })
    this.$el.html(content)
    return this;
  },

  // afterRender: function() {
  //   this.renderImages()
  // },
  //
  // renderImages: function()
  //   this.model.listing().images().each(this.addImage.bind(this));
  // },
  //
  // addImage: function(image) {
  //   var view = new SurpriseBNBApp.Views.ImageShow({
  //     collection: this.model.listing().images(),
  //     model: image
  //   });
  //   this.addSubview('.show-image', view);
  // },

});
