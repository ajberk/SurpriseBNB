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
    this.listenTo(this.comments, 'add', this.addComment)
    this.listenTo(this.model.images(), 'add', this.addImage)
    this.listenTo(this.model,'sync', this.renderMainImage)
    this.makeMapView()
  },

  afterRender: function () {
    this.mapResize();
    this.renderCommentForm();
    this.renderSearchForm();
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
    setTimeout(function () {
      this.$("#mygallery").justifiedGallery();
    }.bind(this), 0)
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

  renderImages: function() {
    this.model.images().each(this.addImage.bind(this));
  },

  addImage: function(image) {
    var view = new SurpriseBNBApp.Views.ImageShow({
      collection: this.model.images(),
      model: image
    });
    this.addSubview('.image-div', view);
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
    console.log('rendering main image');
    console.log(this.model.images().first().get('image_url'));
    this.$('div.main-img-div').html(this.imageTemplate({
      listing: this.model
    }));
    return this;
  },

  renderFullTemplate: function() {
    var view = new SurpriseBNBApp.Views.ListingSurprise({
      model: this.model
    });
    $('body').append(view.render().$el)
    // this.$el.html(this.fullTemplate({
    //   listing: this.model
    // }));
    //
    // this.renderComments();
    // this.attachSubviews();
    // setTimeout(function () {
    //   this.$("#mygallery").justifiedGallery();
    // }.bind(this), 10);
    // return this;
  }
});
