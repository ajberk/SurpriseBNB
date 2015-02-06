SurpriseBNBApp.Views.ListingForm = Backbone.View.extend({

  tagName: 'form',
  template: JST["listings/new"],

  render: function(){
    this.$el.html(this.template({
      listing: this.model
    }));
    return this;
  },
  events: {
    "click .new-listing": "submit"
  },

  submit: function(event) {
    event.preventDefault();
    data = this.$el.serializeJSON();
    var that = this;
    debugger
    this.model.save(data, {
      success: function() {
        that.collection.add(that.model, {merge: true})
        Backbone.history.navigate("listings/" + that.model.id, {trigger: true})
      }
    })
  }
});
