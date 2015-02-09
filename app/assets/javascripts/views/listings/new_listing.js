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
    // setTimeout(function () {
    //   this.installFilePicker();
    // }.bind(this), 0);
  },

  events: {
    "click .new-listing": "submit",
    "click .my-image-thing": "pick"
    // "change .my-image-thing": "updateImage"
  },

  installFilePicker: function(){
    var $filePickerInput = this.$(".my-image-thing")

    if (!$filePickerInput.is(':visible')) {
      return
    }
    var filePickerInput = $filePickerInput[0];
    // filePickerInput.type = "filepicker";
    // filepicker.constructWidget(filePickerInput);
  },

  pick: function () {
    var that = this;
    filepicker.pick({
      mimetype: 'image/*'
      },
      function(Blob) {
        var $input = $('<input type="hidden" name="listing[images_attributes][][image_url]">');
        $input.val(Blob.url);
        that.$('.image-group').append($input);
        //create an image tag with src of Blob.url, append to page
      },
      function (FPError) {
        console.log(FPError);
      });
  },

  updateImage: function (event) {
    var $target = $(event.currentTarget);
    this.model.set('image_url', $target.val());
    this.render()
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
