class CreateImageModel < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :image_url, :null => false
      t.integer :listing_id, :null => false
    end
  end
end
