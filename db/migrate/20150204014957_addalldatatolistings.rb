class Addalldatatolistings < ActiveRecord::Migration
  def change
    add_column :listings, :user_id,        :integer,  null:false
    add_column :listings, :title,          :string,  null:false
    add_column :listings, :start_date,     :date,  null:false
    add_column :listings, :end_date,       :date,  null:false
    add_column :listings, :country,        :string,  null:false
    add_column :listings, :city,           :string,  null:false
    add_column :listings, :street_address, :string,  null:false
    add_column :listings, :zipcode,        :integer,  null:false
    add_column :listings, :details,        :text,  null:false
    add_index(:listings, :country)
    add_index(:listings, :start_date)
    add_index(:listings, :end_date)
  end
end
