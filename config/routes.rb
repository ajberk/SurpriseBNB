Rails.application.routes.draw do
  root to: 'users#new'
  resources :users, except: [:index]
  resource :session, only: [:new, :create, :destroy]
end
