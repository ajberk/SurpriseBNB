Rails.application.routes.draw do
  root to: 'root#root'
  resources :users, except: [:index] do
  end
  resource :session, only: [:new, :create, :destroy]


  namespace :api, defaults: { format: :json } do
    resources :listings do
      #custom route for search
      collection do
        get 'search' => 'listings#search', :as => 'search_listing'
      end
    end
    resources :bookings, only: [:index]

    resources :comments, only: [:new, :create, :destroy, :index]
  end
end
