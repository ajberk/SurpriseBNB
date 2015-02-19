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

  mapResize: function() {
    google.maps.event.trigger(this.mapView._map, 'resize');
    this.mapView._map.panTo({ lat: 37.7833, lng: -122.4167});
  },


});
