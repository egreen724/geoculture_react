Rails.application.routes.draw do

  namespace :api do
	   resources :artworks do
       get "artsy"
     end
  end

end
