class Detail < ActiveRecord::Base
  belongs_to :user
  has_many :bank_details
  has_one :company_detail
end
