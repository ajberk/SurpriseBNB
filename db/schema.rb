# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150204172645) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: true do |t|
    t.integer  "listing_id", null: false
    t.text     "body",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "listings", force: true do |t|
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

  add_index "listings", ["country"], name: "index_listings_on_country", using: :btree
  add_index "listings", ["end_date"], name: "index_listings_on_end_date", using: :btree
  add_index "listings", ["start_date"], name: "index_listings_on_start_date", using: :btree

  create_table "users", force: true do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
