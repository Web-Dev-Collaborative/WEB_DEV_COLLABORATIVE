class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.integer :author_id, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
