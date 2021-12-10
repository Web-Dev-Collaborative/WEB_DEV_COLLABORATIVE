json.extract! note, :id, :title, :body, :updated_at, :created_at, :author_id, :notebook_id
json.tags note.tags.map { |tag| tag.id }