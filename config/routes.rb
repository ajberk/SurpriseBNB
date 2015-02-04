Rails.application.routes.draw do
  root to: 'root#root'
  resources :users, except: [:index] do
    # resources :listings, only: [:create, :new]
  end
  # resources :listings, except: [:create, :new, :index]
  resource :session, only: [:new, :create, :destroy]


  namespace :api, defaults: { format: :json } do
    resources :listings
  end
end
