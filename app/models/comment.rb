class Comment < ActiveRecord::Base
  belongs_to :post, :user
  validates :body, presence: true

  def as_json(options = {})
    super(options.merge(include: :user))
  end
end
