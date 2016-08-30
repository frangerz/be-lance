class ChargeRate < ActiveRecord::Base
  belongs_to :service
  has_many :jobs
end
