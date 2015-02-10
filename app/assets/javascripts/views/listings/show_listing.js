SurpriseBNBApp.Views.ListingShow = Backbone.CompositeView.extend({
  template: JST["listings/show"],

  events: {
  },

  initialize: function(options) {
    this.comments = this.model.comments();
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.comments, 'add', this.render)
    this.makeMapView()
  },

  afterRender: function () {
    this.mapResize();
    this.renderCommentForm();
  },

  makeMapView: function() {
    var view = new SurpriseBNBApp.Views.ListingsMap({});
    this.mapView = view;
    this.addSubview('#map-canvas-show', view);
  },

  mapResize: function() {
    google.maps.event.trigger(this.mapView._map, 'resize')
  },

  render: function(){
    this.$el.html(this.template({
      listing: this.model
    }));

    this.renderComments();
    this.attachSubviews();
    return this;
  },

  renderComments: function () {
    this.model.comments().each(this.addComment.bind(this));
  },

  addComment: function (comment) {
    var view = new SurpriseBNBApp.Views.CommentShow({
      model: comment
    });
    this.addSubview('.comments', view);
  },

  renderCommentForm: function () {
    var comment = new SurpriseBNBApp.Models.Comment();
    comment.set({"listing_id": this.model.id});
    var view = new SurpriseBNBApp.Views.CommentForm({
      collection: this.comments,
      model: comment
    });
    this.addSubview('.comment-form', view);
  }
});
