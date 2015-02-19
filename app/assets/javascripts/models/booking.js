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
      this.listing().set(this.listing().parse(response.listing));
      delete response.listing;
    }
    return response;
  }


});
