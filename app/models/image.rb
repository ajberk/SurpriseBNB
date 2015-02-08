class Image < ActiveRecord::Base
  validates :image_url, :listing_id, presence: true
  belongs_to :listing
end
