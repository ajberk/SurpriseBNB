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

  def search
    # min_price = search_params(:min_price)
    # max_price = search_params(:max_price)
    listings = Listing.search_listings(search_params)
    # is listings an array? I hope so...
    random_listing = listings.sample
    render json: random_listing
  end

  private
  def listing_params
    self.params.require(:listing).permit(:user_id, :title, :start_date, :end_date,
    :country, :city, :street_address, :zipcode, :details, :price)
  end

  def search_params
    self.params.require(:search).permit(:min_price, :max_price)
  end
end
