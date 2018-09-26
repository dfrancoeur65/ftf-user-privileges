require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 20.times do
#   u = User.new
#   u.first_name = Faker::Name.first_name
#   u.last_name = Faker::Name.last_name
#   u.admin = Faker::Boolean.boolean
#   u.underwriter = u.admin ? Faker::Boolean.boolean : false
#   u.sales = u.admin ? Faker::Boolean.boolean : false
#   u.reviewer = u.admin ? Faker::Boolean.boolean : false
#   u.dev = u.admin ? Faker::Boolean.boolean : false
#   u.save!
# end

5.times do
  off = Offering.new
  off.title = Faker::Address.street_address
  off.amount = Faker::Number.between(20, 50) * 10_000
  off.ltv = Faker::Number.between(55, 85) / 100
  off.state = Faker::Address.state
  off.borrower_score = Faker::Number.between(6, 9)
  off.open_for_investment = off.amount.to_f / 10_000 / Faker::Number.between(1, 4)
  off.save!
end
