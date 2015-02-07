class AddImageUrlToListings < ActiveRecord::Migration
  def change
    add_column :listings, :image_url, :string
  end
end
