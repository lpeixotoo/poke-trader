Rails.application.routes.draw do
  # Api paths under namespaces
  namespace :api do
    namespace :v1 do
      resources :pokemons, :defaults => { :format => 'json' }
      resources :trades, :defaults => { :format => 'json' }
    end
  end
  # Frontend app paths
  root to: 'homepage#index'
  #get '/*path' => 'homepage#index'
end
