Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :home
  resources :structure, :only => [:index]
  resources :about, :only => [:index]
  
  root to: 'home#index'

end
