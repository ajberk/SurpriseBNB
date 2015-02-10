SurpriseBNBApp.Views.ListingShow = Backbone.CompositeView.extend({
  template: JST["listings/show"],

  events: {
  },

  initialize: function(options) {
    this.comments = this.model.comments();
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.comments, 'add', this.render)
  },

  render: function(){
    this.$el.html(this.template({
      listing: this.model
    }));
    this.renderCommentForm();
    this.renderComments();
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
