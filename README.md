# SurpriseBNB

[Heroku link][heroku]

[heroku]: http://surprisebnb.herokuapp.com

## Minimum Viable Product
SurpriseBNB is a clone of AirBNB built on Rails and Backbone, with the twist that
instead of reviewing listings by location, listings are seen randomly with the location hidden.
When a user books a listing, the location is revealed. Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create Listings
- [x] Search Listings via Price, type of location (Urban, Suburban, Rural)
- [x] View Random Listing
- [x] View Confirmation Page, with location of listing revealed
- [x] Have user show page with upcoming bookings listed

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Basic Blogs and Posts (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create listings using
simple text forms in Rails views. User should be able to comment on listings
 The most important part of this phase will be pushing the app to Heroku and
ensuring that everything works before moving on to phase 2.

[Details][phase-one]

### Phase 2: JSON API and First Backbone Views (~2 days)
I will add API routes to serve listing data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, the existing Rails views will have been ported over to Backbone. The user
should be able to see a random listing.

[Details][phase-two]

### Phase 3: Editing and Displaying Listings (~2 days)
I plan to use third-party libraries to add functionality to the `PostForm` and
`PostShow` views in this phase. First I'll need to add a Markdown editor to the
`PostForm`, and make sure that the Markdown is properly escaped and formatted in
the `PostShow` view. I also plan to integrate Filepicker for file upload so
users can add images to listings posts. Ideally, when the description of a listing
is created, the app will automatically censor words that will give away location

[Details][phase-three]

### Phase 4: Revealed Listing Page (~1 day)
I'll update the post listing page revealed after a user has booked the listing.
This will include the original listing with location words revealed and a map
of the location.

[Details][phase-four]

### Phase 5: User Home Page (~1 days)
I'll make a users home page, where it displays a list of upcoming trips for the user.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] URLS for listings changing so a user can not access a listing directly
(ie skipping the random listing part of the website)
- [ ] Nearby airport listings shown once listing has been booked
- [ ] Display wikipedia information on location once listing has been booked
- [ ] Star ratings for listings
- [ ] Support for multiple open sessions
- [ ] User avatars

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
