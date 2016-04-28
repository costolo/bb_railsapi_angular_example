userArr = []
10.times do
  userArr << User.create({
    email: Faker::Internet.email, 
    username: Faker::Internet.user_name, 
    password: '11111111'
  })
end

10.times do
  userArr[rand(10)].posts.create({
    title: Faker::Hipster.sentence(3),
    body: Faker::Hipster.paragraph(2)
  })
end

Post.all.each do |post|
  rand(5).times do
    post.comments.create(author: userArr[rand(10)].username, body: Faker::Hipster.sentence)
  end
end

Comment.all.each do |comment| 
  rand(2) % 2 == 0 ? positive = true : positive = false
  votes = rand(100)
  positive ? comment.update_attributes({votes: votes}) : comment.update_attributes({votes: votes*-1})
end





