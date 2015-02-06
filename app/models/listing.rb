class Listing < ActiveRecord::Base
  validates :user_id,
            :title,
            :start_date,
            :end_date,
            :country,
            :city,
            :street_address,
            :zipcode,
            :details,
            presence: true

  belongs_to :user
  has_many :comments

  def self.search_listings(search_params)

    data = self.where(:price => search_params[:min_price]..search_params[:max_price])
    return data
  end

end
