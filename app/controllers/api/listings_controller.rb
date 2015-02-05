class Api::ListingsController <Api::ApiController
  
  def index
    @listing = Listing.all
    render json: @listing
  end

  def create
    @listing = current_user.listings.new(listing_params)
    if @listing.save
      render json: @listing
    else
      render json: @listing.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @listing = current_user.listings.find(params[:id])
    render :show
  end

  private
  def listing_params
    self.params.require(:listing).permit(:user_id, :title, :start_date, :end_date,
    :country, :city, :street_address, :zipcode, :details)
  end
end