Rails.application.routes.draw do
  root 'pages#home'
  namespace :api do
    namespace :v1 do
      get 'greetings/random', to: 'greetings#random_greeting'
    end
  end  
end