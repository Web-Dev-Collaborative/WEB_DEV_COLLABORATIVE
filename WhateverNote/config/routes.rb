# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:default=>{:format=>:json}}
#                  api_user PATCH  /api/users/:id(.:format)                                                                 api/users#update {:default=>{:format=>:json}}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:default=>{:format=>:json}}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:default=>{:format=>:json}}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:default=>{:format=>:json}}
#                 api_notes GET    /api/notes(.:format)                                                                     api/notes#index {:default=>{:format=>:json}}
#                           POST   /api/notes(.:format)                                                                     api/notes#create {:default=>{:format=>:json}}
#              new_api_note GET    /api/notes/new(.:format)                                                                 api/notes#new {:default=>{:format=>:json}}
#             edit_api_note GET    /api/notes/:id/edit(.:format)                                                            api/notes#edit {:default=>{:format=>:json}}
#                  api_note GET    /api/notes/:id(.:format)                                                                 api/notes#show {:default=>{:format=>:json}}
#                           PATCH  /api/notes/:id(.:format)                                                                 api/notes#update {:default=>{:format=>:json}}
#                           PUT    /api/notes/:id(.:format)                                                                 api/notes#update {:default=>{:format=>:json}}
#                           DELETE /api/notes/:id(.:format)                                                                 api/notes#destroy {:default=>{:format=>:json}}
#        api_notebook_notes POST   /api/notebooks/:notebook_id/notes(.:format)                                              api/notes#create {:default=>{:format=>:json}}
#             api_notebooks GET    /api/notebooks(.:format)                                                                 api/notebooks#index {:default=>{:format=>:json}}
#                           POST   /api/notebooks(.:format)                                                                 api/notebooks#create {:default=>{:format=>:json}}
#          new_api_notebook GET    /api/notebooks/new(.:format)                                                             api/notebooks#new {:default=>{:format=>:json}}
#         edit_api_notebook GET    /api/notebooks/:id/edit(.:format)                                                        api/notebooks#edit {:default=>{:format=>:json}}
#              api_notebook GET    /api/notebooks/:id(.:format)                                                             api/notebooks#show {:default=>{:format=>:json}}
#                           PATCH  /api/notebooks/:id(.:format)                                                             api/notebooks#update {:default=>{:format=>:json}}
#                           PUT    /api/notebooks/:id(.:format)                                                             api/notebooks#update {:default=>{:format=>:json}}
#                           DELETE /api/notebooks/:id(.:format)                                                             api/notebooks#destroy {:default=>{:format=>:json}}
#                  api_tags GET    /api/tags(.:format)                                                                      api/tags#index {:default=>{:format=>:json}}
#                           POST   /api/tags(.:format)                                                                      api/tags#create {:default=>{:format=>:json}}
#               new_api_tag GET    /api/tags/new(.:format)                                                                  api/tags#new {:default=>{:format=>:json}}
#              edit_api_tag GET    /api/tags/:id/edit(.:format)                                                             api/tags#edit {:default=>{:format=>:json}}
#                   api_tag GET    /api/tags/:id(.:format)                                                                  api/tags#show {:default=>{:format=>:json}}
#                           PATCH  /api/tags/:id(.:format)                                                                  api/tags#update {:default=>{:format=>:json}}
#                           PUT    /api/tags/:id(.:format)                                                                  api/tags#update {:default=>{:format=>:json}}
#                           DELETE /api/tags/:id(.:format)                                                                  api/tags#destroy {:default=>{:format=>:json}}
#              api_taggings DELETE /api/taggings(.:format)                                                                  api/taggings#destroy {:default=>{:format=>:json}}
#                           POST   /api/taggings(.:format)                                                                  api/taggings#create {:default=>{:format=>:json}}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
  namespace :api, default:{format: :json} do
    resources :users, only: %i(create update)
    resource :session, only: %i(create destroy)
    resources :notes
    resources :notebooks do
      resources :notes, only: :create
    end
    resources :tags
    resource :taggings, only: %i(create destroy)
  end
end
