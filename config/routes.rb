Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
  	   resources :artworks do 
         get "artsy"
       end
     end
  end

end
