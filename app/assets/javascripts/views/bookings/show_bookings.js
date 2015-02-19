SurpriseBNBApp.Views.BookingShow = Backbone.CompositeView.extend({
  template: JST["bookings/show"],

  initialize: function(options) {
    this.listing = options.model.listing()
    this.listing.images().each(this.addImage.bind(this));
    this.listenTo(this.listing.images(),'add', this.addImage)
  },

  render: function() {
    var content = this.template({
      booking: this.model,
      listing: this.listing
    })
    this.$el.html(content)
    this.attachSubviews();
    setTimeout(function() {
      this.$("#mygallery").justifiedGallery({
        lastRow : 'justify',
      });
    }.bind(this), 10);
    return this;
  },

  addImage: function(image) {
    debugger
    var view = new SurpriseBNBApp.Views.ImageShow({
      collection: this.listing.images(),
      model: image
    });
    this.addSubview('.show-image', view);
  }

});
