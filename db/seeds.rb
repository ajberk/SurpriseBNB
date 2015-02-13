# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


listings = Listing.create!([
  {
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
    },
  {
    user_id: 1,
    title: "Downtown cozy 1/1 apt",
    start_date: "2015-01-01",
    end_date: "2020-01-01",
    country: "United States",
    city: "St. Augustine",
    street_address: "1 S Castillo Dr",
    zipcode: 32084,
    details: "AMAZING LOCATION! Situated in the eclectic uptown area. Enjoy our bright and sunny second floor apartment with full kitchen. Full Size bed and sofa / bed.
    AMAZING LOCATION! Situated in the eclectic uptown area. Enjoy our bright and sunny second floor apartment with full kitchen. Full Size bed and sofa / bed. The bathroom is equipped for either a shower or a bath. Our living area has a couch that also serves as a fold down bed. The dining area sits in a bright and sunny corner of the apartment, perfect to sit and enjoy coffee from the Keurig brewer in the kitchen. The kitchen is a very inviting and happy room that has all the necessities for meals at home or just a simple cup of coffee. You will find the apartment to be very clean, safe, smoke free and comfortable.",
    price: 70
    },
  {
    user_id: 1,
    title: "Bed in the City",
    start_date: "2015-01-01",
    end_date: "2020-01-01",
    country: "United States",
    city: "New York",
    street_address: "328 Malcolm X Boulevard",
    zipcode: 10027,
    details: "Come share my cool apartment in the city. I have an extra bed available. If more than two people want to come, I have an air mattress. Close to everthing you could ever want",
    price: 65
    },
  {
    user_id: 1,
    title: "Share my apartment in the city",
    start_date: "2015-01-01",
    end_date: "2020-01-01",
    country: "United States",
    city: "Denver",
    street_address: "3000 E 1st Ave",
    zipcode: 80206,
    details: "Privacy and clean environment

      They have access to every thing and the train is just by the front door no need of a car easy transport and i personally provide transport arrangement to the guests

      Any time 24 seven I answer your questions right away

      Friendly

      U don't need a car because there is a train and bus and I also provide rides any were you want I can pick you from the air port or any place in the area and take you any were you want at a cheap price than a taxi",
    price: 45
    },
  {
    user_id: 1,
    title: "A comfy beach apartment",
    start_date: "2015-01-01",
    end_date: "2020-01-01",
    country: "Australia",
    city: "Bondi Beach",
    street_address: "164 Campbell Pde",
    zipcode: 2026,
    details: "Being close to the beach is a real luxery! And very close to downtown, restaurants and bars! Room for a couple. The local people are known for their friendliness and sense of community. YOU WILL LOVE IT!",
    price: 67
    }
])

images = Image.create!([
  {image_url: "https://a0.muscache.com/ic/pictures/9094000/58b5fc4e_original.jpg?interpolation=lanczos-none&size=xx_large&output-format=jpg&output-quality=70", listing: listings[0]},
  {image_url: "https://a1.muscache.com/ic/pictures/9094035/bb6a06ca_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[0]},
  {image_url: "https://a2.muscache.com/ic/pictures/9094021/e8b188fa_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[0]},
  {image_url: "https://a1.muscache.com/ic/pictures/58993556/87f49868_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[1]},
  {image_url: "https://a0.muscache.com/ic/pictures/65358421/c9a5d472_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[1]},
  {image_url: "https://a2.muscache.com/ic/pictures/65358372/a484956a_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[1]},
  {image_url: "https://a1.muscache.com/ic/pictures/57629921/c67a897a_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[1]},
  {image_url: "https://a2.muscache.com/ic/pictures/54418302/0dad66b4_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[2]},
  {image_url: "https://a1.muscache.com/ic/pictures/54418284/b5a07e0f_original.jpg?interpolation=lanczos-none&size=xx_large&output-format=jpg&output-quality=70", listing: listings[2]},
  {image_url: "https://a2.muscache.com/ic/pictures/54418299/6c802b5f_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[2]},
  {image_url: "https://a2.muscache.com/ic/pictures/54418313/bc552246_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[2]},
  {image_url: "https://a1.muscache.com/ic/pictures/63350469/303b33a1_original.jpg?interpolation=lanczos-none&size=xx_large&output-format=jpg&output-quality=70", listing: listings[3]},
  {image_url: "https://a0.muscache.com/ic/pictures/58552867/f198bc8d_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[3]},
  {image_url: "https://a2.muscache.com/ic/pictures/63350518/cd7f83d3_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[3]},
  {image_url: "https://a2.muscache.com/ic/pictures/58552891/a997600a_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[3]},
  {image_url: "https://a0.muscache.com/ic/pictures/37365290/5476397a_original.jpg?interpolation=lanczos-none&size=xx_large&output-format=jpg&output-quality=70", listing: listings[4]},
  {image_url: "https://a0.muscache.com/ic/pictures/38643957/36c29c2e_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[4]},
  {image_url: "https://a1.muscache.com/ic/pictures/38643895/25af3da3_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[4]},
  {image_url: "https://a1.muscache.com/ic/pictures/38643824/7bd0108a_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70", listing: listings[4]}
])



  # {image_url: "", listing: listings[]},
