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
    "click .new-listing": "submit",
    "click .my-image-thing": "pick"
  },

  installFilePicker: function(){
    var $filePickerInput = this.$(".my-image-thing")
    if (!$filePickerInput.is(':visible')) {
      return
    }
    var filePickerInput = $filePickerInput[0];
  },

  pick: function () {
    var that = this;
    filepicker.pick({
      mimetype: 'image/*'
      },
      function(Blob) {
        that.pickSuccess(Blob)
      },
      function (FPError) {
        console.log(FPError);
      });
  },

  pickSuccess: function(Blob) {
    var $input = $('<input type="hidden" name="listing[images_attributes][][image_url]">');
    $input.val(Blob.url);
    this.$('.image-group').append($input);
    var $image = $('<img src ='+ Blob.url + '>')
    $('div.image-div').append($image)
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
