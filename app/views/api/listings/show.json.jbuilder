json.extract! @listing, :id, :title, :start_date, :end_date, :country, :city,
  :zipcode, :street_address, :created_at, :updated_at, :details, :price, :image_url



json.comments @listing.comments do |comment|
  json.extract! comment, :id, :listing_id, :body, :user_id
end

json.images @listing.images do |image|
  json.extract! image, :id, :listing_id, :image_url
end
