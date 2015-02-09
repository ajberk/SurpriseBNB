class Image < ActiveRecord::Base
  validates :image_url, :listing, presence: true
  belongs_to :listing, inverse_of: :images
end
