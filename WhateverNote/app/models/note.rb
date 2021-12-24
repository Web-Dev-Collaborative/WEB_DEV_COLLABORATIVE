# == Schema Information
#
# Table name: notes
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  notebook_id :integer          not null
#  title       :string           not null
#  body        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Note < ApplicationRecord
    validates :author_id, :notebook_id, :title, presence: true

    # after_initialize :ensure_notebook

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :notebook,
        foreign_key: :notebook_id,
        class_name: :Notebook

    has_many :taggings

    has_many :tags,
        through: :taggings,
        source: :tag

    # def ensure_notebook
    #     self.notebook_id ||= current_user
    # end
end
