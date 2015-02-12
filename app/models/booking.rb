class Booking < ActiveRecord::Base
  validates :booker_id, :start_date, :end_date, presence: true

  belongs_to(
  :booker,
  class_name: :User,
  foreign_key: :booker_id,
  primary_key: :id
  )

  belongs_to(
  :listing,
  class_name: :Listing,
  foreign_key: :listing_id,
  primary_key: :id
  )

end
