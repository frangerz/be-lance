class Service < ActiveRecord::Base
  belongs_to :user
  has_many :appointments
  has_many :jobs
  has_many :charge_rates
end
