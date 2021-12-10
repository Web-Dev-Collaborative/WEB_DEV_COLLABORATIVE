# == Schema Information
#
# Table name: taggings
#
#  id         :bigint           not null, primary key
#  tag_id     :bigint
#  note_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tagging < ApplicationRecord
    validates :tag, uniqueness: { scope: :note }

    belongs_to :tag
    belongs_to :note
end
