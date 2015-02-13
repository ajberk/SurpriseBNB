class Addalldatatolistings < ActiveRecord::Migration
  def change
    create_table "listings" do |t|
      t.datetime "created_at"
      t.datetime "updated_at"
      t.integer  "user_id",        null: false
      t.string   "title",          null: false
      t.date     "start_date",     null: false
      t.date     "end_date",       null: false
      t.string   "country",        null: false
      t.string   "city",           null: false
      t.string   "street_address", null: false
      t.integer  "zipcode",        null: false
      t.text     "details",        null: false
    end

    add_index(:listings, :country)
    add_index(:listings, :start_date)
    add_index(:listings, :end_date)
  end
end
