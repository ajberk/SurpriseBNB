class Api::BookingsController < Api::ApiController

  def index
    @bookings = Booking.where("booker_id = ?", current_user.id)
    # render json: @booking
    render :index
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render json: @booking
    else
      render json: @booking.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def booking_params
    self.params.require(:booking).permit(:start_date, :end_date, :booker_id, :listing_id)
  end
end
