class Api::BookingsController < Api::ApiController

  def index
    @booking = Booking.where("booker_id = ?", current_user.id)
    render json: @booking
  end

end
