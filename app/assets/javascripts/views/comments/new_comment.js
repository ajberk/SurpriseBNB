SurpriseBNBApp.Views.CommentForm = Backbone.View.extend({
  tagName: 'form',
  template: JST["comments/new"],

  initialize: function(options) {
    this.listenTo(this.collection, "add", this.render)
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },


  events: {
    "click .new-comment": "submit"
  },

  submit: function(event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    var that = this;
    this.model.set({username: SurpriseBNBApp.currentUserUsername})
    this.model.save(data, {
      success: function() {
        that.collection.add(that.model, {merge: true})
        that.model = new SurpriseBNBApp.Models.Comment({
          listing_id: that.model.get("listing_id")
        })
      }
    })
  }

});
