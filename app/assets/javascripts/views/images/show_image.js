SurpriseBNBApp.Views.ImageShow = Backbone.CompositeView.extend({
  template: JST["images/show"],

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){
    this.$el.html(this.template({
      image: this.model
    }));
    return this;
  },
});
