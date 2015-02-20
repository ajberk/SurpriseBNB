SurpriseBNBApp.Views.ListingsMap = Backbone.CompositeView.extend({
  template: JST["listings/map"],

  initialize: function (options) {
    this._markers = {};
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    if(!this.model.get("updated_at")) {
      return this;
    }
    // ONLY CALL THIS ONCE!
    this.addMarker(this.model, function(resp) {
      var lat = resp.results[0].geometry.location.lat
      var lng = resp.results[0].geometry.location.lng
      var mapOptions = {
        center: { lat: lat, lng: lng},
        zoom: 9,
        height: 500,
      };
      this._map = new google.maps.Map(this.el, mapOptions);
    }.bind(this));
    return this;
  },

  // Event handlers
  addMarker: function (listing, callback) {
    var data = listing.get("street_address") + " " + listing.get("city") + " " + listing.get("zipcode")
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + data,
      dataType: 'json',
      success: function(response) {
        callback(response);

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

    var marker = new google.maps.Marker({
      position: latLng,
      map: this._map,
      address: listing.get("street_address") + ", " + listing.get("city") + ", " + listing.get("zipcode")
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
      content: marker.address
    });

    infoWindow.open(this._map, marker);
  }

});
