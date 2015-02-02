# Phase 2: JSON API and First Backbone Views

## Rails
### Models

### Controllers
Api::ListingsController (create, destroy, index, show)
Api::CommentsController (create, destroy, show, update)

### Views
* blogs/show.json.jbuilder

## Backbone
### Models
* Listing (parses nested `Comments` association)
* Comments

### Collections
* Blogs
* Posts

### Views
* UserShow (empty for now)
* PostShow

## Gems/Libraries
