json.array! @bookings do |booking|
  json.extract! booking, :id, :booker_id, :listing_id, :start_date, :end_date

  json.listing booking.listing, :title, :street_address, :country, :zipcode
end
