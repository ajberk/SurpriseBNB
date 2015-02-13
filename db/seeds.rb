# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


listings = Listing.create!([{
    user_id: 1,
    title: "Country Living at its finest",
    start_date: "2015-01-01",
    end_date: "2020-01-01",
    country: "United States",
    city: "Nebraska City",
    street_address: "315 South 11 Street",
    zipcode: 68410,
    details: "Private room and bath in our home located on 10 acres of private and secluded property 25 minutes south of downtown. Enjoy the outdoors! Come enjoy the quiet solitude of the country.",
    price: 60
  }])

images = Image.create!([
  {image_url: "https://a0.muscache.com/ic/pictures/9094000/58b5fc4e_original.jpg?interpolation=lanczos-none&size=xx_large&output-format=jpg&output-quality=70", listing: listings[0]}
  {image_url: "https://a1.muscache.com/ic/pictures/9094035/bb6a06ca_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[0]}
  {image_url: "https://a2.muscache.com/ic/pictures/9094021/e8b188fa_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[0]}
])



  # {id: 3, image_url: "", listing_id: 1}
