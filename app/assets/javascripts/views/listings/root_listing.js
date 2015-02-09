SurpriseBNBApp.Views.ListingsRoot = Backbone.View.extend({
  template: JST["listings/root"],
  templateNotFound: JST["listings/notfound"],

  initialize: function(options) {
    // this.renderMap()
  },

  render: function(){
    this.$el.html(this.template());
    this.$(".countries").chosen({width: '200px'});
    return this;
  },

  renderNotFound: function() {
    var $error = this.$('.error')
    $error.html(this.templateNotFound());
    return this;
  },
   renderMap: function() {
      // ONLY CALL THIS ONCE!
       var mapOptions = {
           center: { lat: 37.7833, lng: -122.4167},
           zoom: 12
        };

        this._map = new google.maps.Map(this.el, mapOptions);
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
        that.renderNotFound()
      }
    })

  }

});
