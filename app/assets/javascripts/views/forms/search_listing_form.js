SurpriseBNBApp.Views.SearchForm = Backbone.CompositeView.extend({
  template: JST["forms/search_listing"],
  templateNotFound: JST["listings/notfound"],

  events: {
    "submit form.search": "submit",
  },

  render: function() {
    var date = new Date()
    this.$el.html(this.template({
      date: date
    }));
    this.$(".countries").chosen({width: '200px'});
    return this;
  },

  onRender: function () {
    this.render();
  },

  renderNotFound: function() {
    var $error = this.$('.error')
    $error.html(this.templateNotFound());
    return this;
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
        that.renderNotFound()
      }
    })
  }
});
