SurpriseBNBApp.Views.ListingShow = Backbone.View.extend({
  template: JST["listings/show"],

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){
    this.$el.html(this.template({
      listing: this.model
    }));
    return this;
  },

  events: {
  }
});
