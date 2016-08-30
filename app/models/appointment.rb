class Appointment < ActiveRecord::Base
  belongs_to :job
end
