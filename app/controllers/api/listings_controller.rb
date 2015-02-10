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
    listings = Listing.search_listings(search_params)
    random_listing = listings.sample
    @listing = random_listing
    if random_listing.nil?
      render json: random_listing, status: :unprocessable_entity
    else
      render :show
    end
  end

  private
  def listing_params
    self.params.require(:listing).permit(:user_id, :title, :start_date, :end_date,
    :country, :city, :street_address, :zipcode, :details, :price, images_attributes: [:image_url])
  end

  def search_params
    self.params.require(:search).permit(:min_price, :max_price, :start_date,
      :end_date, :image_url, :countries => [] )
  end
end
