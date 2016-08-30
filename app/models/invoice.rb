class Invoice < ActiveRecord::Base
  belongs_to :job
  has_many :users
end
