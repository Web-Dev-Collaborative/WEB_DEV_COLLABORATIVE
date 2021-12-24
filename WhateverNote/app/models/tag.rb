# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord
    validates :name, presence: true

    belongs_to :user,
        foreign_key: :author_id

    has_many :taggings

    has_many :notes,
        through: :taggings,
        source: :note
end
