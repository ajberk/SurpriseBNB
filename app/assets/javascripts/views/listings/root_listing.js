SurpriseBNBApp.Views.ListingsRoot = Backbone.View.extend({
  template: JST["listings/root"],
  templateNotFound: JST["listings/notfound"],

  initialize: function(options) {
  },

  render: function(){
    this.$el.html(this.template());
    this.$(".countries").chosen({width: '200px'});
    return this;
  },

  renderNotFound: function() {
    debugger
    var $error = this.$('.error')
    $error.html(this.templateNotFound());
    return this;
  },

  events: {
    "submit form.search": "submit"
  },

  submit: function(event){
    event.preventDefault();
    var that = this;
    var $target = $(event.currentTarget);
    var data = $target.serializeJSON();

    // ajax stuff, pass in the data
    $.ajax({
      url: '/api/listings/search',
      dataType: 'json',
      data: data,
      success: function(response) {
        //response will have data corresponding to listing in the listings collection
        var listing = new SurpriseBNBApp.Models.Listing(response)
        that.collection.add(listing, {merge: true})
        Backbone.history.navigate("#listings/" + listing.id, {trigger: true})
      },

      error: function() {
        debugger
        that.renderNotFound()
      }
    })

  }

});
