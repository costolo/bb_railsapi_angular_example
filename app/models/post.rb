class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  validates :title, :body, presence: true

  def as_json(options={})
    super(options.merge(include: :comments))
  end
end
