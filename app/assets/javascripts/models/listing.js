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

  images: function () {
    if (!this._images) {
      this._images = new SurpriseBNBApp.Collections.Images([], {
        images: this
      });
    }

    return this._images;
  },

  parse: function (response) {
    if (response.comments) {
      this.comments().set(response.comments, { parse: true });
      delete response.comments;
    }

    if (response.images) {
      this.images().set(response.images, { parse: true });
      delete response.images;
    }

    return response;
  }
});
