# == Schema Information
#
# Table name: notebooks
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Notebook < ApplicationRecord
    validates :name, :author_id, presence: true

    has_many :notes,
        foreign_key: :notebook_id,
        dependent: :destroy

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
