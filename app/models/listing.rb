# == Schema Information
#
# Table name: listings
#
#  id             :integer          not null, primary key
#  created_at     :datetime
#  updated_at     :datetime
#  user_id        :integer          not null
#  title          :string(255)      not null
#  start_date     :date             not null
#  end_date       :date             not null
#  country        :string(255)      not null
#  city           :string(255)      not null
#  street_address :string(255)      not null
#  zipcode        :integer          not null
#  details        :text             not null
#  price          :float
#  image_url      :string(255)
#

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
  has_many :images, inverse_of: :listing

  accepts_nested_attributes_for(:images) #look up options, makes setter method called images_attributes=

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
