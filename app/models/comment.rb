# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  listing_id :integer          not null
#  body       :text             not null
#  created_at :datetime
#  updated_at :datetime
#

class Comment < ActiveRecord::Base
  belongs_to :listing
end
