class Listing < ActiveRecord::Base
  validates :user_id,
            :title,
            :start_date,
            :end_date,
            :country:
            :city:
            :street_address,
            :zipcode,
            :details,
            presence: true

  belongs_to :user

end
