class ListingsController < ApplicationController
  # before_filter :require_signed_in

  def new
    render :new
  end

  def create
    @listing = Listing.new(listing_params)
    @listing.user_id = current_user.id
    if @listing.save
      redirect_to listing_url(@listing)
    else
      flash.now[:errors] = listing.errors.full_messages
      render :new
    end
  end

  def show
    render :show
  end

  private
  def listing_params
    self.params.require(:listing).permit(:user_id, :title, :start_date, :end_date,
      :country, :city, :street_address, :zipcode, :details, images_attributes: [:image_url])
  end
end
