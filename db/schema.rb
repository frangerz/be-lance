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

ActiveRecord::Schema.define(version: 20160828011525) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.text     "description"
    t.string   "title"
    t.integer  "allocated_time"
    t.integer  "quote"
    t.datetime "alert_at"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "charge_rates", force: :cascade do |t|
    t.string   "description"
    t.integer  "period"
    t.integer  "cost"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string   "location"
    t.text     "description"
    t.text     "reason"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "invoices", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "total_cost"
    t.datetime "payment_completed_at"
    t.datetime "last_payment"
    t.datetime "next_payment"
    t.integer  "recovered"
    t.integer  "owed"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.integer  "quote"
    t.datetime "alert_at"
    t.integer  "duration"
    t.integer  "cost_per_hour"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "stars"
    t.integer  "speed"
    t.integer  "quality"
    t.integer  "experience"
    t.integer  "comfort"
    t.text     "description"
    t.string   "title"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "services", force: :cascade do |t|
    t.string   "location"
    t.boolean  "mobile"
    t.string   "title"
    t.text     "description"
    t.text     "experience"
    t.string   "materials"
    t.integer  "speed"
    t.integer  "cost_quality"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "firstname"
    t.string   "surname"
    t.date     "dob"
    t.string   "uuid"
    t.string   "scope"
    t.boolean  "admin"
    t.string   "status"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "email"
    t.string   "password_salt"
    t.string   "password_hash"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

end
