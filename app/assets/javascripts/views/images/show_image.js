SurpriseBNBApp.Views.ImageShow = Backbone.CompositeView.extend({
  template: JST["images/show"],
  className: 'image-show',

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){
    var content = this.template({
      image: this.model
    })
    this.$el.html(content)
    $('div.image-div').html(content);
    return this;
  },

  afterRender: function() {
    this.renderImages()
  },
});
