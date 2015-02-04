# Schema Information

## Listing
column name   | data type | details
------------  |-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users)
title         | string    | not null
start_date    | date      | not null
end_date      | date      | not null
coutry        | string    | not null
city          | string    | not null
street_address| string  | not null
zipcode      | integer    | not null
details       | text       | not null


## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
listing_id  | integer   | not null, foreign key (references Listing)
body        | text      | not null,


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
