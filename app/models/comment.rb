class Comment < ActiveRecord::Base
  belongs_to :post, :user
  validates :body, presence: true
end
