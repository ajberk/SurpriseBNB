SurpriseBNBApp.Views.ListingsMap = Backbone.CompositeView.extend({
  template: JST["listings/map"],

  render: function() {
    // ONLY CALL THIS ONCE!
    console.log("map render");
    var mapOptions = {
      center: { lat: 37.7833, lng: -122.4167},
      zoom: 12,
      height: "500px"
    };
    this._map = new google.maps.Map(this.el, mapOptions);
    return this;
  },


});
