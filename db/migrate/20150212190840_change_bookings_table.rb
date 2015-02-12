class ChangeBookingsTable < ActiveRecord::Migration
  def change
    remove_column :bookings, :owner_id
    add_column :bookings, :listing_id,        :integer,  null:false
  end
end
