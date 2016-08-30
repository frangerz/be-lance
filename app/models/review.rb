class Review < ActiveRecord::Base
  belongs_to :job
  has_one :users
end
