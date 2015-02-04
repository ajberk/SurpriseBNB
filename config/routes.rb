Rails.application.routes.draw do
  root to: 'users#new'
  resources :users, except: [:index] do
    resources :listings, only: [:create, :new]
  end
  resources :listings, except: [:create, :new, :index]
  resource :session, only: [:new, :create, :destroy]
end
