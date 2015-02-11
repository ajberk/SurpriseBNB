SurpriseBNBApp.Views.ListingSurprise = Backbone.CompositeView.extend({
  template: JST["listings/surprise"],

  initialize: function () {
    this.makeMapView();
    setTimeout(function () {
      $('html').on('click', function () {
        $('html').off('click');
        console.log("The viwe is closing")
      });
    }, 42)
  },

  events: {
    "click .surprise-content": "noClicky"
  },

  noClicky: function (event){
    event.stopPropagation();
    console.log("I was clicked, not html");
  },

  render: function () {
    var content = this.template({
      listing: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    setTimeout(function () {
      this.mapResize();

    }.bind(this), 10);
    return this;
  },

  makeMapView: function() {
    var view = new SurpriseBNBApp.Views.ListingsMap({});
    this.mapView = view;
    this.addSubview('#map-canvas', view);
  },

  mapResize: function() {
    google.maps.event.trigger(this.mapView._map, 'resize')
  },
});
