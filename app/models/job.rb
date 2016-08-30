class Job < ActiveRecord::Base
  belongs_to :service
  has_one :charge_rate
  has_many :invoices
  has_many :appointments
  has_many :materials
end
