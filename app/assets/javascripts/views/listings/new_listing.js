SurpriseBNBApp.Views.ListingForm = Backbone.View.extend({

  tagName: 'form',
  template: JST["listings/new"],

  render: function(){
    this.$el.html(this.template({
      listing: this.model
    }));
    var $filePickerInput = this.$("input[type=filepicker]")
    filepicker.constructWidget($filePickerInput[0])
    return this;
  },

  events: {
    "click .new-listing": "submit",
    "change input[type=filepicker]": "updateImage"
  },

  updateImage: function (event) {
    var $target = $(event.currentTarget);
    this.model.set('image_url', $target.val());
    this.render();
    // <!-- name="listing[images_attributes][image_url]" --> for the template
  },

  submit: function(event) {
    event.preventDefault();
    data = this.$el.serializeJSON();
    var that = this;
    this.model.save(data, {
      success: function() {
        that.collection.add(that.model, {merge: true})
        Backbone.history.navigate("listings/" + that.model.id, {trigger: true})
      }
    })
  }
});
