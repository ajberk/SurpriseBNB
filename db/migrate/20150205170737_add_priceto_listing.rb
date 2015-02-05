class AddPricetoListing < ActiveRecord::Migration
  def change
    add_column :listings, :price, :float
    add_index :listings, :price
  end
end
