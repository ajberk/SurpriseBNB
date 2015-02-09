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

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
