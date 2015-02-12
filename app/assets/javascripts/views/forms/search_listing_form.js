SurpriseBNBApp.Views.SearchForm = Backbone.CompositeView.extend({
  template: JST["forms/search_listing"],
  templateNotFound: JST["listings/notfound"],

  events: {
    "submit form.search": "submit",
  },

  render: function() {
    var date = new Date()
    this.$el.html(this.template({
      date: date
    }));
    this.$(".countries").chosen({width: '200px'});
    return this;
  },

  onRender: function () {
    this.render();
  },

  renderNotFound: function() {
    var $error = this.$('.error')
    $error.html(this.templateNotFound());
    return this;
  },



  submit: function(event){
    event.preventDefault();
    var that = this;
    var $target = $(event.currentTarget);
    var data = $target.serializeJSON();
    var start_date = data.search.start_date;
    var end_date = data.search.end_date;
    //WHERE THE SEARCH DATA IS!!!!!

    // ajax stuff, pass in the data
    $.ajax({
      url: '/api/listings/search',
      dataType: 'json',
      data: data,
      success: function(response) {
        var bookingData = {
          "booker_id": SurpriseBNBApp.currentUserId,
          "start_date": start_date,
          "end_date": end_date,
        }
        SurpriseBNBApp.current_pending_booking = new SurpriseBNBApp.Models.Booking(bookingData);
        var listing = new SurpriseBNBApp.Models.Listing(response)
        that.collection.add(listing, {merge: true})
          Backbone.history.navigate("#listings/" + listing.id, {trigger: true})
      },

      error: function() {
        that.renderNotFound()
      }
    })
  }
});
