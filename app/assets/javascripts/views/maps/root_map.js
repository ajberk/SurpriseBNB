SurpriseBNBApp.Views.RootMap = Backbone.CompositeView.extend({
  template: JST["listings/map"],

  initialize: function () {
    this._markers = {};
    this.listenTo(this.collection, 'add', this.addMarker);
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
});
