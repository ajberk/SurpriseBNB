SurpriseBNBApp.Views.ListingsRoot = Backbone.CompositeView.extend({
  template: JST["listings/root"],
  templateNotFound: JST["listings/notfound"],

  initialize: function(options) {
    this.renderSearchForm();
    this.makeMapView();
  },

  afterRender: function () {
    // this.makeMapView();
    this.mapResize();
  },

  render: function(){
    this.$el.html(this.template());
    this.attachSubviews();
    this.onRender();
    return this;
  },


  makeMapView: function() {
    var view = new SurpriseBNBApp.Views.RootMap({
      collection: this.collection
    });
    this.mapView = view;
    this.addSubview('#map-canvas', view);
  },

  renderSearchForm: function() {
    var view = new SurpriseBNBApp.Views.SearchForm({
      collection: this.collection
    })
    this.addSubview('.search-form', view)
  },


  renderNotFound: function() {
    var $error = this.$('.error')
    $error.html(this.templateNotFound());
    return this;
  },

  // events: {
  //   "submit form.search": "submit",
  // },

  mapResize: function() {
    google.maps.event.trigger(this.mapView._map, 'resize');
    this.mapView._map.panTo({ lat: 37.7833, lng: -122.4167});
  },

  // submit: function(event){
  //   event.preventDefault();
  //   var that = this;
  //   var $target = $(event.currentTarget);
  //   var data = $target.serializeJSON();
  //   var start_date = data.search.start_date;
  //   var end_date = data.search.end_date;
  //   $.ajax({
  //     url: '/api/listings/search',
  //     dataType: 'json',
  //     data: data,
  //     success: function(response) {
  //       //response will have data corresponding to listing in the listings collection
  //       var bookingData = {
  //         "booker_id": SurpriseBNBApp.currentUserId,
  //         "start_date": start_date,
  //         "end_date": end_date,
  //       }
  //       debugger
  //       SurpriseBNBApp.current_pending_booking = new SurpriseBNBApp.Models.Booking(bookingData);
  //       var listing = new SurpriseBNBApp.Models.Listing(response);
  //       that.collection.add(listing, {merge: true});
  //       Backbone.history.navigate("#listings/" + listing.id, {trigger: true});
  //     },
  //
  //     error: function() {
  //       that.renderNotFound()
  //     }
  //   })
  // }

});
