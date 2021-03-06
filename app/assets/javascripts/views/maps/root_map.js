SurpriseBNBApp.Views.RootMap = Backbone.CompositeView.extend({
  template: JST["listings/map"],

  initialize: function (options) {
    this._markers = {};
    this.listenTo(this.collection, 'add', this.addMarker);
    this.addMarkers();
  },

  render: function() {
    // ONLY CALL THIS ONCE!
    var mapOptions = {
      center: { lat: 37.7833, lng: -122.4167},
      zoom: 2,
      height: 500,
    };
    this._map = new google.maps.Map(this.el, mapOptions);
    return this;
  },

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

  addMarkers: function () {
    var self = this;
    this.collection.each(function (listing) {
      self.addMarker(listing);
    });
  },

  successCallback: function(listing,response) {
    var lat = response.results[0].geometry.location.lat
    var lng = response.results[0].geometry.location.lng

    if (this._markers[listing.id]) { return };
    var view = this;

    var latLng = new google.maps.LatLng(
      lat,
      lng
    );

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
    var infoWindow = new google.maps.InfoWindow({
      content: marker.title
    });

    infoWindow.open(this._map, marker);
  }

});
