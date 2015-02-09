# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  image_url  :string(255)      not null
#  listing_id :integer          not null
#

class Image < ActiveRecord::Base
  validates :image_url, :listing, presence: true
  belongs_to :listing, inverse_of: :images
end
