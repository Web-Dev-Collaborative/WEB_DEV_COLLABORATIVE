class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :sessio_token, null: false
      t.string :password_digest, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :user_icon

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :sessio_token, unique: true
    add_index :users, :first_name
    add_index :users, :password_digest
  end
end
