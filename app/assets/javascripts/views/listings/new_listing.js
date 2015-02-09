SurpriseBNBApp.Views.ListingForm = Backbone.View.extend({

  tagName: 'form',
  template: JST["listings/new"],

  render: function(){
    this.$el.html(this.template({
      listing: this.model
    }));

    return this;
  },

  afterRender: function () {
    setTimeout(function () {
      this.installFilePicker();
    }.bind(this), 0);
  },

  events: {
    "click .new-listing": "submit",
    "change .my-image-thing": "updateImage"
  },

  installFilePicker: function(){
    var $filePickerInput = this.$(".my-image-thing")

    if (!$filePickerInput.is(':visible')) {
      return
    }
    var filePickerInput = $filePickerInput[0];
    filePickerInput.type = "filepicker";
    filepicker.constructWidget(filePickerInput);
  },

  updateImage: function (event) {
    var $target = $(event.currentTarget);
    this.model.set('image_url', $target.val());
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
