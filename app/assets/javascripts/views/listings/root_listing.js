SurpriseBNBApp.Views.ListingsRoot = Backbone.CompositeView.extend({
  template: JST["listings/root"],
  templateNotFound: JST["listings/notfound"],

  initialize: function(options) {
    this.makeMapView()
  },

  render: function(){
    console.log("root render");
    this.$el.html(this.template());
    this.$(".countries").chosen({width: '200px'});
    this.attachSubviews();
    return this;
  },


  makeMapView: function() {
    var view = new SurpriseBNBApp.Views.ListingsMap({});
    this.mapView = view;
    // view.render()
    this.addSubview('#map-canvas', view);
  },

  renderNotFound: function() {
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
        that.renderNotFound()
      }
    })

  }

});
