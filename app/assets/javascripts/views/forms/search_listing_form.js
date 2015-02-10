SurpriseBNBApp.Views.SearchForm = Backbone.CompositeView.extend({
  template: JST["forms/search_listing"],

  render: function() {
    this.$el.html(this.template());
    this.$(".countries").chosen({width: '200px'});
    return this;
  },



});
