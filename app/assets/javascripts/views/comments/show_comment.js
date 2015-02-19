SurpriseBNBApp.Views.CommentShow = Backbone.CompositeView.extend({
  template: JST["comments/show"],

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){
    debugger
    this.$el.html(this.template({
      comment: this.model
    }));
    return this;
  },
});
