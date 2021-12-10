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
require 'test_helper'

class NoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
