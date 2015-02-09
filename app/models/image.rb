class Image < ActiveRecord::Base
<<<<<<< HEAD
  validates :image_url, :listing, presence: true
  belongs_to :listing, inverse_of: :images
=======
  validates :image_url, :listing_id, presence: true
  belongs_to :listing
>>>>>>> master
end
