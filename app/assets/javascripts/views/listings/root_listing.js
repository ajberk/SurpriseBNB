SurpriseBNBApp.Views.ListingsRoot = Backbone.View.extend({

  tagName: 'form',
  template: JST["listings/root"],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  events: {
  },

});
