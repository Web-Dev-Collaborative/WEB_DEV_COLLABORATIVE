class FixUsersTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :sessio_token, :session_token
  end
end
