SurpriseBNBApp.Routers.Router = Backbone.Router.extend({
  initialize:  function(options){
    this.listings = options.listings,
    this.$rootEl = options.$rootEl
  },

  routes: {
    "": "root",
    "listings/new": "newListing",
    "listings/:id/edit": "editListing",
    "listings/:id": "showListing",
    "users/:id": "showUser"
  },

  newListing: function() {
    var listing = new SurpriseBNBApp.Models.Listing()
    var view = new SurpriseBNBApp.Views.ListingForm({
      model: listing,
      collection: this.listings
    });
    this._swapView(view)
  },

  showListing: function(id) {
    SurpriseBNBApp.Bookings.fetch()
    var listing = this.listings.getOrFetch(id)
    var view = new SurpriseBNBApp.Views.ListingShow({
      model: listing,
      collection: this.listings,
    });
    this._swapView(view)
  },

  root: function() {
    var view = new SurpriseBNBApp.Views.ListingsRoot({
      collection: this.listings
    })
    this._swapView(view)
  },

  showUser: function () {
    var view = new SurpriseBNBApp.Views.UserShow({});
    this._swapView(view)
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove()
    this._currentView = view
    this.$rootEl.html(view.render().$el)
    if(view.afterRender) {
      view.afterRender();
    }
  }
});
