Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}
  root to: 'application#angular'
  resources :posts, only: [:create, :index, :show] do
    resources :comments, only: [:show, :create] do
      member do
        put 'upvote' => 'comments#upvote'
        put 'downvote' => 'comments#downvote'
      end
    end
  end
end
