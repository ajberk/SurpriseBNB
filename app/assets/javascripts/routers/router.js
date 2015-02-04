SurpriseBNBApp.Routers.Router = Backbone.Router.extend({
  initialize:  function(options){
    this.listings = options.listings,
    this.$rootEl = options.$rootEl
  },

  routes: {
    "": "root",
    "listings/new": "newListing",
    "listings/:id": "showListing",
    "listings/:id/edit": "editListing"
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
    var listing = this.listings.getOrFetch(id)
    var view = new SurpriseBNBApp.Views.ListingShow({
      model: listing
    });
    this._swapView(view)
  },

  root: function() {
    var view = new SurpriseBNBApp.Views.ListingsRoot()
    this._swapView(view)
  },

  _swapView: function(view) {
    _currentView && _currentView.remove()
    var _currentView = view
    this.$rootEl.html(view.render().$el)
  }
});
