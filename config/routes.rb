Rails.application.routes.draw do

  namespace :api do
  	resources :user 
  end

end
