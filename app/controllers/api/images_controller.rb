class ImagesController < ApplicationController

  def index
    render json: Image.all
  end

  def create
    # need to set the listing
    listing = current_user.listings.find(params[:listing_id])
    @image = listing.images.new(image_params)
    if @image.save
      render json: @image
    else
      render error: @image.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def image_params
    self.params.require(:image).permit(:image_url)
  end
end
