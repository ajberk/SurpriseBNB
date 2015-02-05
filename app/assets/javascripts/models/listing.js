SurpriseBNBApp.Models.Listing = Backbone.Model.extend({
  urlRoot: "/api/listings",

  comments: function () {
    if (!this._comments) {
      this._comments = new SurpriseBNBApp.Collections.Comments([], {
        comments: this
        });
    }

    return this._comments;
  },

  parse: function (response) {
    if (response.comments) {
      this.comments().set(response.comments, { parse: true });
      delete response.comments;
    }

    return response;
  }
});
