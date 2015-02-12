SurpriseBNBApp.Views.ListingsMap = Backbone.CompositeView.extend({
  template: JST["listings/map"],

  initialize: function () {
    this._markers = {};
    this.listenTo(this.collection, 'add', this.addMarker);
  },


  render: function() {
    // ONLY CALL THIS ONCE!
    var mapOptions = {
      center: { lat: this.lat, lng: this.lng},
      zoom: 9,
      height: 500,

    };
    this._map = new google.maps.Map(this.el, mapOptions);
    return this;
  },

  // Event handlers
  addMarker: function (listing) {
    var data = listing.get("street_address") + " " + listing.get("city") + " " + listing.get("zipcode")
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + data,
      dataType: 'json',
      success: function(response) {
        this.successCallback(listing, response)
      }.bind(this)
    });
  },

  successCallback: function(listing,response) {
    //response will have data corresponding to listing in the listings collection
    this.lat = response.results[0].geometry.location.lat
    this.lng = response.results[0].geometry.location.lng

    if (this._markers[listing.id]) { return };
    var view = this;

    var latLng = new google.maps.LatLng(
      this.lat,
      this.lng
    );
    debugger

    var marker = new google.maps.Marker({
      position: latLng,
      map: this._map,
      title: "A Great Property You Might Stay In!"
    });

    google.maps.event.addListener(marker, 'click', function (event) {
      view.showMarkerInfo(event, marker);
    });

    this._markers[listing.id] = marker;
  },

  removeMarker: function (listing) {
    var marker = this._markers[listing.id];
    marker.setMap(null);
    delete this._markers[listing.id];
  },

  showMarkerInfo: function (event, marker) {
    // This event will be triggered when a marker is clicked. Right now it
    // simply opens an info window with the title of the marker. However, you
    // could get fancier if you wanted (maybe use a template for the content of
    // the window?)

    var infoWindow = new google.maps.InfoWindow({
      content: marker.title
    });

    infoWindow.open(this._map, marker);
  }

});
