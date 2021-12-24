json.extract! tag, :id, :name
json.notes tag.notes.map { |note| note.id }