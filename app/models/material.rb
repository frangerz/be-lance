class Material < ActiveRecord::Base
  has_many :jobs
  belongs_to :stocker
end
