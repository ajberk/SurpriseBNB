class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :owner_id, null: false
      t.integer :booker_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false


      t.timestamps
    end
  end
end
