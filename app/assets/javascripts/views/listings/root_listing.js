SurpriseBNBApp.Views.ListingsRoot = Backbone.View.extend({
  template: JST["listings/root"],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  events: {
  },

});
