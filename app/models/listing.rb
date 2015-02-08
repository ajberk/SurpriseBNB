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
  has_many :images

  def self.search_listings(search_params)
    if search_params[:countries].empty?
      countries = nil
    else
      countries = search_params[:countries]
    end

    # fail
    self.
      where(:price => search_params[:min_price]..search_params[:max_price]).
      where("start_date <= ?", search_params[:start_date]).
      where("end_date >= ?", search_params[:end_date]).
      where("country in (?) OR ? is NULL", countries, countries)
  end

end
