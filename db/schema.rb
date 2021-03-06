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

ActiveRecord::Schema.define(version: 20_180_926_120_355) do
  create_table 'investments', force: :cascade do |t|
    t.integer 'offering_id'
    t.decimal 'amount', precision: 8, scale: 2
    t.integer 'user_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['offering_id'], name: 'index_investments_on_offering_id'
    t.index ['user_id'], name: 'index_investments_on_user_id'
  end

  create_table 'offerings', force: :cascade do |t|
    t.string 'title'
    t.string 'amount'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.decimal 'ltv'
    t.string 'state'
    t.decimal 'open_for_investment'
    t.integer 'borrower_score'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'first_name'
    t.string 'last_name'
    t.boolean 'admin'
    t.boolean 'underwriter'
    t.boolean 'dev'
    t.boolean 'sales'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.boolean 'reviewer'
  end
end
