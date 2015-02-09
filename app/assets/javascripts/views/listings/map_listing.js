SurpriseBNBApp.Views.ListingsRoot = Backbone.View.extend({
  template: JST["listings/map"],

  renderMap: function() {
    // ONLY CALL THIS ONCE!
    var mapOptions = {
      center: { lat: 37.7833, lng: -122.4167},
      zoom: 12
    };

    this._map = new google.maps.Map(this.el, mapOptions);
  },
  

});
