SurpriseBNBApp.Views.ListingShow = Backbone.CompositeView.extend({
  hiddenTemplate: JST["listings/hidden_show"],
  fullTemplate: JST["listings/full_show"],
  imageTemplate: JST["images/main_image"],

  events: {
    "click #book-listing": "renderSurprise",
  },

  initialize: function(options) {
    this.comments = this.model.comments();
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.comments, 'add', this.addComment)
    this.listenTo(this.model.images(), 'add', this.addImage)
    this.listenTo(this.model,'sync', this.renderMainImage)
    this.makeMapView();
    this.renderSearchForm();
    this.renderCommentForm();
  },

  afterRender: function () {
    this.mapResize();
  },

  makeMapView: function() {
    var view = new SurpriseBNBApp.Views.ListingsMap({
      model: this.model
    });
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
    }.bind(this), 10)

    // $('.sub-img').hover(function(){
    //   $(this).css({width:"200%",height:"200%"});
    // },function(){
    //   $(this).css({width:"100%",height:"100%"});
    // });

    this.onRender();
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
    var view = new SurpriseBNBApp.Views.SearchForm({
      collection: this.collection
    })
    this.addSubview('.search-form', view)
  },

  renderMainImage: function() {
    this.$('div.main-img-div').html(this.imageTemplate({
      listing: this.model
    }));
    return this;
  },

  renderSurprise: function() {
    var view = new SurpriseBNBApp.Views.ListingSurprise({
      model: this.model
    });
    $('body').append(view.render().$el)
  }
});
