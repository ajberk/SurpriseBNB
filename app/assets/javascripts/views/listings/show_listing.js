SurpriseBNBApp.Views.ListingShow = Backbone.CompositeView.extend({
  hiddenTemplate: JST["listings/hidden_show"],
  fullTemplate: JST["listings/full_show"],
  imageTemplate: JST["images/main_image"],

  events: {
    "click #book-listing": "renderFullTemplate",
  },

  initialize: function(options) {
    this.comments = this.model.comments();
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.comments, 'add', this.renderComments)
    this.makeMapView()
  },

  afterRender: function () {
    this.mapResize();
    this.renderCommentForm();
    this.renderSearchForm();
    this.renderMainImage();
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
    this.$el.html(this.hiddenTemplate({
      listing: this.model
    }));
    this.renderComments();
    this.attachSubviews();
    this.renderMainImage();
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
  },

  renderSearchForm: function() {
    var view = new SurpriseBNBApp.Views.SearchForm()
    this.addSubview('.search-form', view)
  },

  renderSearchForm: function() {
    var view = new SurpriseBNBApp.Views.SearchForm()
    this.addSubview('.search-form', view)
  },

  renderMainImage: function() {
    this.$('div.main-img-div').html(this.imageTemplate({
      listing: this.model
    }));
    return this;
  },

  renderFullTemplate: function() {
    console.log(this.model);
    this.$el.html(this.fullTemplate({
      listing: this.model
    }));

    this.renderComments();
    this.renderMainImage();
    this.attachSubviews();
    return this;
  }
});
