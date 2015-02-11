SurpriseBNBApp.Views.UserShow = Backbone.CompositeView.extend({
  template: JST["users/show"],

  render: function() {
    var content = this.template({
      listings: this.collection
    });
    this.$el.html(content)
    return this;
  },
});
