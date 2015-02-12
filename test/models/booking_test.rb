# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  owner_id   :integer          not null
#  booker_id  :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  created_at :datetime
#  updated_at :datetime
#

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
