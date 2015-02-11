window.SurpriseBNBApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var listings = new SurpriseBNBApp.Collections.Listings();
    listings.fetch();
    var $rootEl = $("#content");
    new SurpriseBNBApp.Routers.Router({
      listings: listings,
      $rootEl: $rootEl
    })
    Backbone.history.start()

  }
};

// $(document).ready(function(){
//   SurpriseBNBApp.initialize();
// });
