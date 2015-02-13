SurpriseBNBApp.Models.Booking = Backbone.Model.extend({
  urlRoot: "/api/bookings",


  listing: function () {
    if (!this._listing) {
      this._listing = new SurpriseBNBApp.Models.Listing();
    }

    return this._listing;
  },

  parse: function (response) {
    if (response.listing) {
      debugger
      this.listing().set(response.listing, { parse: true });
      delete response.listing;
    }


    return response;
  }


});
