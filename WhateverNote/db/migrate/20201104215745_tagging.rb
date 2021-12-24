class Tagging < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.references :tag, index: true, foreign_key: true
      t.references :note, index: true, foreign_key: true

      t.timestamps
    end
  end
end
