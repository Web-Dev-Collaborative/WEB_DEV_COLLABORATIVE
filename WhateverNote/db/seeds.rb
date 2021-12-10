# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Note.destroy_all
Notebook.destroy_all
User.destroy_all

users = User.create!([
    {email:'dori@coralreef.au', password:"iforgot", first_name:"Dori", last_name:"Tang", user_icon: "dori"}
])

notebooks = Notebook.create!([
    {name:"My Notebook", author_id:users[0].id}
])

users[0].default_notebook=notebooks[0].id
users[0].save

notes = Note.create!([
    {title:"Things I said", 
    body:"Hey, look – balloons! It is a party!\nHey, conscience. Am I dead?\nYes, trust. It’s what friends do.\nWhoa, whoa, whoa! Hey! Relax. Take a deep breath.",
    author_id:users[0].id, notebook_id: notebooks[0].id},
    {title:"My summer hit song", 
    body:"DORY:
    Hey mister grumpy gills
    Life's full of little spills
    Don't throw your fins up in disgust
    Oh what's the use of floatin' there
    Not going anywhere?
    Swish your tail
    And dive on in
    And trust...
    That...if...you
    Just keep swimming
    Just keep swimming
    Life isn't all that grim!
    MARLIN:
    Ugh
    DORY:
    Just keep swimming
    Just keep swimming
    What do we do?
    MARLIN:
    We swim?
    DORY:
    Right!
    La la la la la la la la
    MARLIN:
    Don't sing!
    DORY:
    La la la la la la la la
    MARLIN:
    No singing, please!
    DORY:
    La la la la la la la!
    MARLIN:
    Ugh! Now that song is going to be stuck in my head!
    DORY:
    Look there's a shiny thing!
    Hey that looks interesting
    MARLIN:
    Please, Dory try to stay on task
    DORY:
    It says \"P Sherman 42 Wallaby Way, Sydney\" Hmm, I guess it's nothing
    MARLIN:
    No, Dory! That's the mask!
    DORY:
    Yay! We did it!
    MARLIN:
    Yeah, but now what?
    We don't know how to get there
    DORY:
    So we follow our gut!
    MARLIN:
    But...
    DORY:
    Just keep swimming
    Just keep swimming
    Everything will be okay
    See?
    Just keep swimming
    Move your tail
    And sure enough we'll find our way
    Oh sometimes things look bad
    Then poof! The moment is gone
    And what do we do?
    BOTH:
    We just keep swimming on
    DORY:
    To P Sherman 42 Wallaby Way, Sydney!",
    author_id:users[0].id, notebook_id: notebooks[0].id}
])