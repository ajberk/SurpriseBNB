json.extract! @listing, :id, :title, :start_date, :end_date, :country, :city,
  :zipcode, :street_address, :created_at, :updated_at

json.comments @listing.comments do |comment|
  json.extract! comment, :id, :listing_id, :body
end
