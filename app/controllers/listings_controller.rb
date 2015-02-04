class ListingsController < ApplicationController

  def new
    render :new
  end

  def create
    user = User.find(params[:owner_id])
    @listing = user.listings.new(listing_params)
    if @listing.save
      redirect_to listings_url(@listing)
    else
      flash.now[:errors] = listing.errors.full_messages
      render :new
    end
  end

  def show

  end

  private
  def listing_params
    self.params.require(:listing).permit(:title, :start_date, :end_date,
      :country, :city, :street_address, :zipcode, :details)
  end
end
